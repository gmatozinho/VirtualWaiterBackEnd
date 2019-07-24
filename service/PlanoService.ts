import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Plano } from '../entity/PlanoEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Plano[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Plano);
        const planos = await repository.find(builtQuery);
        return planos;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Plano> => {
    try {
        const repository = getRepository(Plano);
        const plano = await repository.findOne(id);
        return plano;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Plano[]> => {
    try {
        const repository = getRepository(Plano);
        const planos = repository.create(body);
        const savedData = await repository.save(planos);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Plano[]> => {
    try {
        const repository = getRepository(Plano);
        const planos = repository.create(body);
        const upgradedData = await repository.save(planos);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Plano[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Plano);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const planos = await repository.findByIds(ArrayIds);
        
        // if (planos !== undefined && planos.length > zero) {
        //     planos.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(planos);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
