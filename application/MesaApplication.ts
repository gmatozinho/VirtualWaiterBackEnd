import { statusHTTPCode } from './../utils/statusHTTP';
import * as MesaService from '../service/MesaService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const mesa = await MesaService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(mesa);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const mesa = await MesaService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(mesa);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const mesa = await MesaService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(mesa);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const mesa = await MesaService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(mesa);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const mesa = await MesaService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(mesa);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
