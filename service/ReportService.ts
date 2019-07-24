import { statusHTTPCode } from '../utils/statusHTTP';
import { Request, Response } from 'express';
import { getRepository, createQueryBuilder } from 'typeorm';
import { HandleErr } from '../error/HandleError';
import { Comanda } from '../entity/ComandaEntity';

export let report_TotaldeVendasPorAno = async (request: Request, response: Response) => {
    try {
        const estId = request.query.id;
        const report = await getRepository(Comanda)
            .createQueryBuilder('comanda')
            .select('sum(conta.total)', 'Total')
            .addSelect('date_part(\'year\',comanda.horarioinicio)', 'Ano')
            .innerJoin('comanda.contas', 'conta')
            .innerJoin('comanda.mesa', 'mesa')
            .innerJoin('mesa.estabelecimento', 'estabelecimento', 'estabelecimento.id = :id', { id: estId })
            .groupBy('"Ano"')
            .addGroupBy('Total')
            .orderBy('"Ano"')
            .getRawMany();
        response.send(report);
        response.status(statusHTTPCode.sucessResponse.Accepted);
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let report_VendaPorDiaNoMesCorrente = async (request: Request, response: Response) => {
    try {
        const estId = request.query.id;
        const report = await getRepository(Comanda)
            .createQueryBuilder('comanda')
            .select('sum(conta.total)', 'Total')
            .addSelect('date_part(\'day\',comanda.horarioinicio)', 'Dia')
            .innerJoin('comanda.contas', 'conta')
            .innerJoin('comanda.mesa', 'mesa')
            .innerJoin('mesa.estabelecimento', 'estabelecimento', 'estabelecimento.id = :id', { id: estId })
            .where('date_part(\'month\',comanda.horarioinicio) = date_part(\'month\',NOW())')
            .andWhere('date_part(\'year\',comanda.horarioinicio) = date_part(\'year\',NOW())')
            .groupBy('"Dia"')
            .orderBy('"Dia"')
            .getRawMany();
        response.send(report);
        response.status(statusHTTPCode.sucessResponse.Accepted);
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let report_ProdutosMaisVendidosEntreDatas = async (request: Request, response: Response) => {
    try {
        // const estId = request.query.id;
        const estId = request.query.id;
        const dataFim_ = new Date(Date.now());
        const dataInicio_ = new Date(Date.now());
        const umMes = 30;
        dataInicio_.setDate(dataInicio_.getDate() - umMes);
        let dataFim = dataFim_.toLocaleDateString();
        let dataInicio = dataInicio_.toLocaleDateString();
        const limiteDados = 5;

        if (request.query.datainicio != undefined && request.query.datafim != undefined) {
            dataFim = request.query.datafim; // data mais atual
            dataInicio = request.query.datainicio; // data mais antiga
        }
        const report = await getRepository(Comanda)
            .createQueryBuilder('comanda')
            .select('produto.nome', 'Produto')
            .addSelect('count(*)', 'QuantidadePedida')
            .innerJoin('comanda.pedidos', 'pedido')
            .innerJoin('pedido.itens', 'item')
            .innerJoin('item.produto', 'produto', 'produto.ativo = True')
            .innerJoin('produto.estabelecimento', 'estabelecimento', 'estabelecimento.id = :id', { id: estId })
            .where('pedido.datahora between :datainicio and :datafim',
                { datainicio: dataInicio, datafim: dataFim })
            .groupBy('"Produto"')
            .orderBy('"QuantidadePedida"', 'DESC')
            .limit(limiteDados)
            .getRawMany();
        response.send(report);
        response.status(statusHTTPCode.sucessResponse.Accepted);
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

