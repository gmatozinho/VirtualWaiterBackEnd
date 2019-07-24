import { statusHTTPCode } from './../utils/statusHTTP';
import * as ItemService from '../service/ItemService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const item = await ItemService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(item);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const item = await ItemService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(item);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const item = await ItemService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(item);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const item = await ItemService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(item);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const item = await ItemService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(item);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
