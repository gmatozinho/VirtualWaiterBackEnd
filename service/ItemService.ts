import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Item } from '../entity/ItemEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Item[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Item);
        const itens = await repository.find(builtQuery);
        return itens;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Item> => {
    try {
        const repository = getRepository(Item);
        const estabelecimento = await repository.findOne(id);
        return estabelecimento;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Item[]> => {
    try {
        const repository = getRepository(Item);
        const itens = repository.create(body);
        const savedData = await repository.save(itens);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Item[]> => {
    try {
        const repository = getRepository(Item);
        const itens = repository.create(body);
        const upgradedData = await repository.save(itens);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Item[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Item);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const itens = await repository.findByIds(ArrayIds);
        
        // if (itens !== undefined && itens.length > zero) {
        //     itens.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(itens);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
