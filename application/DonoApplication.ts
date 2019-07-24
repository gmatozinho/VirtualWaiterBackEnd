import { statusHTTPCode } from './../utils/statusHTTP';
import * as DonoService from '../service/DonoService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const dono = await DonoService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(dono);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const dono = await DonoService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(dono);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const dono = await DonoService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(dono);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const dono = await DonoService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(dono);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const dono = await DonoService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(dono);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
