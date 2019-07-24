import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Avaliacao } from '../entity/AvaliacaoEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Avaliacao[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Avaliacao);
        const avaliacoes = await repository.find(builtQuery);
        return avaliacoes;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Avaliacao> => {
    try {
        const repository = getRepository(Avaliacao);
        const avaliacao = await repository.findOne(id);
        return avaliacao;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Avaliacao[]> => {
    try {
        const repository = getRepository(Avaliacao);
        const avaliacoes = repository.create(body);
        const savedData = await repository.save(avaliacoes);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Avaliacao[]> => {
    try {
        const repository = getRepository(Avaliacao);
        const avaliacoes = repository.create(body);
        const upgradedData = await repository.save(avaliacoes);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Avaliacao[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Avaliacao);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const avaliacoes = await repository.findByIds(ArrayIds);
        
        // if (avaliacoes !== undefined && avaliacoes.length > zero) {
        //     avaliacoes.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(avaliacoes);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
