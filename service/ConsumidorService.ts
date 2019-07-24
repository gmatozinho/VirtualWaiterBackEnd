import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Consumidor } from '../entity/ConsumidorEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Consumidor[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Consumidor);
        const consumidores = await repository.find(builtQuery);
        return consumidores;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Consumidor> => {
    try {
        const repository = getRepository(Consumidor);
        const consumidor = await repository.findOne(id);
        return consumidor;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Consumidor[]> => {
    try {
        const repository = getRepository(Consumidor);
        const consumidores = repository.create(body);
        const savedData = await repository.save(consumidores);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Consumidor[]> => {
    try {
        const repository = getRepository(Consumidor);
        const consumidores = repository.create(body);
        const upgradedData = await repository.save(consumidores);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Consumidor[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Consumidor);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const consumidores = await repository.findByIds(ArrayIds);
        
        // if (consumidores !== undefined && consumidores.length > zero) {
        //     consumidores.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(consumidores);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
