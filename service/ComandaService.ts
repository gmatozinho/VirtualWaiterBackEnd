import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Comanda } from '../entity/ComandaEntity';
import { HandleErr } from '../error/HandleError';

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
