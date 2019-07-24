import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Dono } from '../entity/DonoEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Dono[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Dono);
        const donos = await repository.find(builtQuery);
        return donos;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Dono> => {
    try {
        const repository = getRepository(Dono);
        const dono = await repository.findOne(id);
        return dono;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Dono[]> => {
    try {
        const repository = getRepository(Dono);
        const donos = repository.create(body);
        const savedData = await repository.save(donos);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Dono[]> => {
    try {
        const repository = getRepository(Dono);
        const donos = repository.create(body);
        const upgradedData = await repository.save(donos);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Dono[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Dono);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const donos = await repository.findByIds(ArrayIds);
        
        // if (donos !== undefined && donos.length > zero) {
        //     donos.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(donos);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
