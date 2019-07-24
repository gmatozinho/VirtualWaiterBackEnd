import { statusHTTPCode } from './../utils/statusHTTP';
import * as SecaoService from '../service/SecaoService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const secao = await SecaoService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(secao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const secao = await SecaoService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(secao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const secao = await SecaoService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(secao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const secao = await SecaoService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(secao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const secao = await SecaoService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(secao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let secaoRecomendada = async (request: Request, response: Response) => {
    await SecaoService.getRecomendada(request, response);
};
