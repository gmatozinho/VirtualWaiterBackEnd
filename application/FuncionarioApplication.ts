import { statusHTTPCode } from './../utils/statusHTTP';
import * as FuncionarioService from '../service/FuncionarioService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const funcionario = await FuncionarioService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(funcionario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const funcionario = await FuncionarioService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(funcionario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const funcionario = await FuncionarioService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(funcionario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const funcionario = await FuncionarioService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(funcionario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const funcionario = await FuncionarioService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(funcionario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
