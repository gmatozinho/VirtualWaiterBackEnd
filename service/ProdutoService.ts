import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Produto } from '../entity/ProdutoEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Produto[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Produto);
        const produtos = await repository.find(builtQuery);
        return produtos;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Produto> => {
    try {
        const repository = getRepository(Produto);
        const produto = await repository.findOne(id);
        return produto;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectByIds = async (ids: number[]): Promise<Produto[]> => {
    try {
        const repository = getRepository(Produto);
        const produto = await repository.findByIds(ids);
        return produto;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Produto[]> => {
    try {
        const repository = getRepository(Produto);
        const produtos = repository.create(body);
        const savedData = await repository.save(produtos);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Produto[]> => {
    try {
        const repository = getRepository(Produto);
        const produtos = repository.create(body);
        const upgradedData = await repository.save(produtos);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Produto[]> => {
    try {
        const zero = 0;
        const repository = getRepository(Produto);
        const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        const produtos = await repository.findByIds(ArrayIds);
        
        if (produtos !== undefined && produtos.length > zero) {
            produtos.forEach(element => element.ativo = false);
            const removedData = await repository.save(produtos);
            return removedData;
        }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
