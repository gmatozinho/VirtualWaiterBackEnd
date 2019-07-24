import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Funcionario } from '../entity/FuncionarioEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Funcionario[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Funcionario);
        const funcionarios = await repository.find(builtQuery);
        return funcionarios;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Funcionario> => {
    try {
        const repository = getRepository(Funcionario);
        const funcionario = await repository.findOne(id);
        return funcionario;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Funcionario[]> => {
    try {
        const repository = getRepository(Funcionario);
        const funcionarios = repository.create(body);
        const savedData = await repository.save(funcionarios);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Funcionario[]> => {
    try {
        const repository = getRepository(Funcionario);
        const funcionarios = repository.create(body);
        const upgradedData = await repository.save(funcionarios);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Funcionario[]> => {
    try {
        const zero = 0;
        const repository = getRepository(Funcionario);
        const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        const funcionarios = await repository.findByIds(ArrayIds);
        
        if (funcionarios !== undefined && funcionarios.length > zero) {
            funcionarios.forEach(element => element.ativo = false);
            const removedData = await repository.save(funcionarios);
            return removedData;
        }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
