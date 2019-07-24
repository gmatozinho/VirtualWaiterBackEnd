import { statusHTTPCode } from './../utils/statusHTTP';
import * as EstabelecimentoService from '../service/EstabelecimentoService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimento = await EstabelecimentoService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(estabelecimento);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimento = await EstabelecimentoService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(estabelecimento);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimento = await EstabelecimentoService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(estabelecimento);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimento = await EstabelecimentoService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(estabelecimento);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimento = await EstabelecimentoService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(estabelecimento);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
