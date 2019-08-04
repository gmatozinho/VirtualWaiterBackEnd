import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository, getConnection } from 'typeorm';
import { Comanda } from '../entity/ComandaEntity';
import { HandleErr } from '../error/HandleError';
import { Request, Response } from 'express';
import { statusHTTPCode } from '../utils/statusHTTP';

export let selectAll = async (params?: any): Promise<Comanda[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Comanda);
        const comandas = await repository.find(builtQuery);
        return comandas;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Comanda> => {
    try {
        const repository = getRepository(Comanda);
        const comanda = await repository.findOne(id);
        return comanda;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Comanda[]> => {
    try {
        const repository = getRepository(Comanda);
        const comandas = repository.create(body);
        const savedData = await repository.save(comandas);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Comanda[]> => {
    try {
        const repository = getRepository(Comanda);
        const comandas = repository.create(body);
        const upgradedData = await repository.save(comandas);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Comanda[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Comanda);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const comandas = await repository.findByIds(ArrayIds);
        
        // if (comandas !== undefined && comandas.length > zero) {
        //     comandas.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(comandas);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let getComandaEstabelecimento = async (request: Request, response: Response) => {
    try {
        const connection = getConnection();
        const builder = new QueryBuilder(request.query);
        const builtQuery = builder.build();
        const consumidorid = builtQuery.where.consumidor;
        const estabelecimentoid = builtQuery.where.estabelecimento;
        const comandaid = builtQuery.where.comanda;
        const situacaocomanda = builtQuery.where.situacaocomanda;
        const limiteDados = 200;

        if (!consumidorid) {
            response.send({mensagem: 'Informe o consumidor'});
            response.status(statusHTTPCode.sucessResponse.Accepted);
            return;
        }

        let where = ' 1 = 1 ';
        if (estabelecimentoid) {
            where += ' AND estabelecimento.id = ' + estabelecimentoid + ' ';
        }
        if (situacaocomanda) {
            where += ' AND comanda.enumsituacaocomanda = ' + situacaocomanda + ' ';
        }
        if (comandaid) {
            where += ' AND comanda.id = ' + comandaid + ' ';
        }
        const result = await connection.createQueryBuilder()
        .select('estabelecimento.id', 'estabelecimentoid')
        .addSelect('mesa.id', 'mesaid')
        .addSelect('comanda.id', 'comandaid')
        .addSelect('comanda.enumsituacaocomanda', 'situacaocomanda')
        .from('estabelecimento', 'estabelecimento')
        .innerJoin('estabelecimento.mesas', 'mesa')
        .innerJoin('mesa.comandas', 'comanda', 'comanda."responsavelId" = :id', { id: consumidorid } )
        .where(where)
        .orderBy('comanda.horarioinicio', 'DESC')
        .limit(limiteDados).getRawMany();

        const ids = [];
        result.forEach(
            row => {
                ids.push({ estabelecimentoid: row.estabelecimentoid as number,
                    comandaid: row.comandaid as number,
                    mesaid: row.mesaid as number,
                    enumsituacaocomanda: row.situacaocomanda as number }
                );
            }
        );
        const zero = 0;
        if (ids.length > zero) {
            response.send(ids);
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