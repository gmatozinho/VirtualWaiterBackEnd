import { statusHTTPCode } from './../utils/statusHTTP';
import * as ComandaService from '../service/ComandaService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const comanda = await ComandaService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(comanda);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const comanda = await ComandaService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(comanda);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const comanda = await ComandaService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(comanda);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const comanda = await ComandaService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(comanda);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const comanda = await ComandaService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(comanda);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let comandaEstabelecimento = async (request: Request, response: Response) => {
    await ComandaService.getComandaEstabelecimento(request, response);
};