import { statusHTTPCode } from './../utils/statusHTTP';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio        
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send({"message": "Api no AR","codigo":200});
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

