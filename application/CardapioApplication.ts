import { statusHTTPCode } from './../utils/statusHTTP';
import * as CardapioService from '../service/CardapioService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const cardapio = await CardapioService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(cardapio);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const cardapio = await CardapioService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(cardapio);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const cardapio = await CardapioService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(cardapio);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const cardapio = await CardapioService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(cardapio);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const cardapio = await CardapioService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(cardapio);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
