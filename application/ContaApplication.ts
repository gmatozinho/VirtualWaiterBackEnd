import { statusHTTPCode } from './../utils/statusHTTP';
import * as ContaService from '../service/ContaService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const conta = await ContaService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(conta);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const conta = await ContaService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(conta);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const conta = await ContaService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(conta);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const conta = await ContaService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(conta);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const conta = await ContaService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(conta);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
