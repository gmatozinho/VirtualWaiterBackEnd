import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Conta } from '../entity/ContaEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Conta[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Conta);
        const contas = await repository.find(builtQuery);
        return contas;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Conta> => {
    try {
        const repository = getRepository(Conta);
        const conta = await repository.findOne(id);
        return conta;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Conta[]> => {
    try {
        const repository = getRepository(Conta);
        const contas = repository.create(body);
        const savedData = await repository.save(contas);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Conta[]> => {
    try {
        const repository = getRepository(Conta);
        const contas = repository.create(body);
        const upgradedData = await repository.save(contas);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Conta[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Conta);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const contas = await repository.findByIds(ArrayIds);
        
        // if (contas !== undefined && contas.length > zero) {
        //     contas.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(contas);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
