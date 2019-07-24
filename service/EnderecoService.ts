import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Endereco } from '../entity/EnderecoEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Endereco[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Endereco);
        const enderecos = await repository.find(builtQuery);
        return enderecos;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Endereco> => {
    try {
        const repository = getRepository(Endereco);
        const endereco = await repository.findOne(id);
        return endereco;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Endereco[]> => {
    try {
        const repository = getRepository(Endereco);
        const enderecos = repository.create(body);
        const savedData = await repository.save(enderecos);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Endereco[]> => {
    try {
        const repository = getRepository(Endereco);
        const enderecos = repository.create(body);
        const upgradedData = await repository.save(enderecos);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Endereco[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Endereco);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const enderecos = await repository.findByIds(ArrayIds);
        
        // if (enderecos !== undefined && enderecos.length > zero) {
        //     enderecos.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(enderecos);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
