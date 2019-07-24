import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { EstabelecimentoPlano } from '../entity/EstabelecimentoPlanoEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<EstabelecimentoPlano[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(EstabelecimentoPlano);
        const estabelecimentoplanos = await repository.find(builtQuery);
        return estabelecimentoplanos;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<EstabelecimentoPlano> => {
    try {
        const repository = getRepository(EstabelecimentoPlano);
        const estabelecimentoplano = await repository.findOne(id);
        return estabelecimentoplano;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<EstabelecimentoPlano[]> => {
    try {
        const repository = getRepository(EstabelecimentoPlano);
        const estabelecimentoplanos = repository.create(body);
        const savedData = await repository.save(estabelecimentoplanos);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<EstabelecimentoPlano[]> => {
    try {
        const repository = getRepository(EstabelecimentoPlano);
        const estabelecimentoplanos = repository.create(body);
        const upgradedData = await repository.save(estabelecimentoplanos);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<EstabelecimentoPlano[]> => {
    try {
        // const zero = 0;
        const repository = getRepository(EstabelecimentoPlano);
        // const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        // const estabelecimentoplanos = await repository.findByIds(ArrayIds);
        
        // if (estabelecimentoplanos !== undefined && estabelecimentoplanos.length > zero) {
        //     estabelecimentoplanos.forEach(element => element.ativo = false);
        //     const removedData = await repository.save(estabelecimentoplanos);
        //     return removedData;
        // }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
