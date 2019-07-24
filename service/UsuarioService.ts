import { QueryBuilder } from 'typeorm-express-query-builder';
import { getRepository } from 'typeorm';
import { Usuario } from '../entity/UsuarioEntity';
import { HandleErr } from '../error/HandleError';

export let selectAll = async (params?: any): Promise<Usuario[]> => {
    try {
        const builder = new QueryBuilder(params);
        const builtQuery = builder.build();
        const repository = getRepository(Usuario);
        const usuarios = await repository.find(builtQuery);
        return usuarios;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let selectById = async (id: number): Promise<Usuario> => {
    try {
        const repository = getRepository(Usuario);
        const usuario = await repository.findOne(id);
        return usuario;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let save = async (body: any): Promise<Usuario[]> => {
    try {
        const repository = getRepository(Usuario);
        const usuarios = repository.create(body);
        const savedData = await repository.save(usuarios);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let upgrade = async (body: any): Promise<Usuario[]> => {
    try {
        const repository = getRepository(Usuario);
        const usuarios = repository.create(body);
        const upgradedData = await repository.save(usuarios);
        return upgradedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};

export let remove = async (body: any): Promise<Usuario[]> => {
    try {
        const zero = 0;
        const repository = getRepository(Usuario);
        const ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
        const usuarios = await repository.findByIds(ArrayIds);
        
        if (usuarios !== undefined && usuarios.length > zero) {
            usuarios.forEach(element => element.ativo = false);
            const removedData = await repository.save(usuarios);
            return removedData;
        }
        
        const oldData = await repository.create(body);
        return oldData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};
