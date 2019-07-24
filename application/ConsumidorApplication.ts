import { statusHTTPCode } from './../utils/statusHTTP';
import * as ConsumidorService from '../service/ConsumidorService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const consumidor = await ConsumidorService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(consumidor);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const consumidor = await ConsumidorService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(consumidor);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const consumidor = await ConsumidorService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(consumidor);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const consumidor = await ConsumidorService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(consumidor);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const consumidor = await ConsumidorService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(consumidor);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
