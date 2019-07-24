import { statusHTTPCode } from './../utils/statusHTTP';
import * as ProdutoService from '../service/ProdutoService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const produto = await ProdutoService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(produto);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const produto = await ProdutoService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(produto);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const produto = await ProdutoService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(produto);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const produto = await ProdutoService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(produto);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const produto = await ProdutoService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(produto);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
