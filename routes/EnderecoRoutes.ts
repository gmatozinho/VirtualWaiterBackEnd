import * as EnderecoApplication from "../application/EnderecoApplication";

/**
 * Inicio das Rotas do Endereco
 */

const enderecoGet = {
    action: EnderecoApplication.get,
    method: "get",
    path: "/api/endereco",
}

const enderecoGetById = {
    action: EnderecoApplication.getById,
    method: "get",
    path: "/api/endereco/:id",
}

const enderecoPost = {
    action: EnderecoApplication.post,
    method: "post",
    path: "/api/endereco",
}

const enderecoPut = {
    action: EnderecoApplication.put,
    method: "put",
    path: "/api/endereco",
}

const enderecoDelete = {
    action: EnderecoApplication.del,
    method: "delete",
    path: "/api/endereco",
}

const EnderecoRoutes = [
    enderecoGet,
    enderecoGetById,
    enderecoPost,
    enderecoPut,
    enderecoDelete]

/**
 * Fim das Rotas do Endereco
 */

export {
    EnderecoRoutes
};
