import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Especialidade } from '../entity/EspecialidadeEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Especialidade[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Especialidade);
        const especialidades = await repository.find(builtQuery);
        return especialidades;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Especialidade> => {
    try {
        const repository = getRepository(Especialidade);
        const especialidade = await repository.findOne(id);
        return especialidade;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Especialidade[]> => {
    try {
        const repository = getRepository(Especialidade);
        const especialidades = repository.create(body);
        const savedData = await repository.save(especialidades);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Especialidade[]> => {
    try {
        const repository = getRepository(Especialidade);
        const especialidades = repository.create(body);
        const upgradedData = await repository.save(especialidades);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Especialidade[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Especialidade);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const especialidades = await repository.findByIds(ArrayIds);
        
        // if (especialidades !== undefined && especialidades.length > zero) {
        //     especialidades.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(especialidades);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
