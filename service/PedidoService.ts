import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Pedido } from '../entity/PedidoEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Pedido[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Pedido);
        const pedidos = await repository.find(builtQuery);
        return pedidos;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Pedido> => {
    try {
        const repository = getRepository(Pedido);
        const pedido = await repository.findOne(id);
        return pedido;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Pedido[]> => {
    try {
        const repository = getRepository(Pedido);
        const pedidos = repository.create(body);
        const savedData = await repository.save(pedidos);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Pedido[]> => {
    try {
        const repository = getRepository(Pedido);
        const pedidos = repository.create(body);
        const upgradedData = await repository.save(pedidos);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Pedido[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(Pedido);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const pedidos = await repository.findByIds(ArrayIds);
        
        // if (pedidos !== undefined && pedidos.length > zero) {
        //     pedidos.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(pedidos);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
