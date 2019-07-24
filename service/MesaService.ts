import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Mesa } from '../entity/MesaEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Mesa[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Mesa);
        const mesas = await repository.find(builtQuery);
        return mesas;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Mesa> => {
    try {
        const repository = getRepository(Mesa);
        const mesa = await repository.findOne(id);
        return mesa;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Mesa[]> => {
    try {
        const repository = getRepository(Mesa);
        const mesas = repository.create(body);
        const savedData = await repository.save(mesas);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Mesa[]> => {
    try {
        const repository = getRepository(Mesa);
        const mesas = repository.create(body);
        const upgradedData = await repository.save(mesas);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Mesa[]> => {
    try {
        const zero = 0;
        const repository = getRepository(Mesa);
        const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        const mesas = await repository.findByIds(ArrayIds);
        
        if (mesas !== undefined && mesas.length > zero) {
            mesas.forEach(element => element.ativo = false);
            const removedData = await repository.save(mesas);
            return removedData;
        }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
