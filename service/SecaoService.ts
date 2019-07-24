import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository, getConnection } from 'typeorm';
import { Secao } from '../entity/SecaoEntity';
import { HandleErr } from '../error/HandleError';
import { Request, Response } from 'express';
import { Comanda } from '../entity/ComandaEntity';
import * as ProdutoService from '../service/ProdutoService';
import { statusHTTPCode } from '../utils/statusHTTP';

export let selectAll = async (params?: any): Promise<Secao[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Secao);
        const secoes = await repository.find(builtQuery);
        return secoes;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Secao> => {
    try {
        const repository = getRepository(Secao);
        const secao = await repository.findOne(id);
        return secao;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Secao[]> => {
    try {
        const repository = getRepository(Secao);
        const secoes = repository.create(body);
        const savedData = await repository.save(secoes);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Secao[]> => {
    try {
        const repository = getRepository(Secao);
        const secoes = repository.create(body);
        const upgradedData = await repository.save(secoes);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Secao[]> => {
    try {
        const zero = 0;
        const repository = getRepository(Secao);
        const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        const secoes = await repository.findByIds(ArrayIds);
        
        if (secoes !== undefined && secoes.length > zero) {
            secoes.forEach(element => element.ativo = false);
            const removedData = await repository.save(secoes);
            return removedData;
        }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let getRecomendada = async (request: Request, response: Response) => {
    try {
        const connection = getConnection();
        const builder = new QueryBuilder(request.query);
        const builtQuery = builder.build();
        const idEst = builtQuery.where.id;
        const limiteDados = 5;

        console.log(idEst)
        const qB = await getRepository(Comanda)
            .createQueryBuilder("comanda")
            .select("produto.id", "pid")
            .addSelect("count(*)", "QuantidadePedida")
            .innerJoin("comanda.pedidos", "pedido")
            .innerJoin("pedido.itens", "item")
            .innerJoin("item.produto", "produto", "produto.ativo = True")
            .innerJoin("produto.estabelecimento", "estabelecimento", "estabelecimento.id = :id", { id: idEst })
            .groupBy("pid")
            .orderBy("\"QuantidadePedida\"", "DESC")
            .limit(limiteDados);

        const result = await connection
            .createQueryBuilder()
            .select("\"T\".pid", "pid")
            .from("(" + qB.getQuery() + ")", "T")
            .setParameters(qB.getParameters())
            .getRawMany();

        const ids = [];
        result.forEach(row => ids.push(<number>row.pid))
        
        const produtos = await ProdutoService.selectByIds(ids);
        const zero = 0;
        if (produtos.length > zero) {
            const secaoRecomendada = new Secao();
            secaoRecomendada.ativo = true;
            secaoRecomendada.descricao = "Recomendadas";
            secaoRecomendada.id = zero;
            secaoRecomendada.produtos = produtos;

            response.send(secaoRecomendada);
            response.status(statusHTTPCode.sucessResponse.Accepted);
        } else {
            response.send([]);
            response.status(statusHTTPCode.sucessResponse.Accepted);
        }

    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
