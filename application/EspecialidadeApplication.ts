import { statusHTTPCode } from './../utils/statusHTTP';
import * as EspecialidadeService from '../service/EspecialidadeService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const especialidade = await EspecialidadeService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(especialidade);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const especialidade = await EspecialidadeService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(especialidade);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const especialidade = await EspecialidadeService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(especialidade);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const especialidade = await EspecialidadeService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(especialidade);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const especialidade = await EspecialidadeService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(especialidade);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
