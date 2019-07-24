import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Estabelecimento } from '../entity/EstabelecimentoEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Estabelecimento[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Estabelecimento);
        const estabelecimentos = await repository.find(builtQuery);
        return estabelecimentos;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Estabelecimento> => {
    try {
        const repository = getRepository(Estabelecimento);
        const estabelecimento = await repository.findOne(id);
        return estabelecimento;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Estabelecimento[]> => {
    try {
        const repository = getRepository(Estabelecimento);
        const estabelecimentos = repository.create(body);
        const savedData = await repository.save(estabelecimentos);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Estabelecimento[]> => {
    try {
        const repository = getRepository(Estabelecimento);
        const estabelecimentos = repository.create(body);
        const upgradedData = await repository.save(estabelecimentos);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Estabelecimento[]> => {
    try {
        const zero = 0;
        const repository = getRepository(Estabelecimento);
        const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        const estabelecimentos = await repository.findByIds(ArrayIds);
        
        if (estabelecimentos !== undefined && estabelecimentos.length > zero) {
            estabelecimentos.forEach(element => element.ativo = false);
            const removedData = await repository.save(estabelecimentos);
            return removedData;
        }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
