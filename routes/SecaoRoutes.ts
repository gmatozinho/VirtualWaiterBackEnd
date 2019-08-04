import * as SecaoApplication from "../application/SecaoApplication";

/**
 * Inicio das Rotas do Secao
 */

const secaoGet = {
    action: SecaoApplication.get,
    method: "get",
    path: "/api/secao",
}

const secaoGetById = {
    action: SecaoApplication.getById,
    method: "get",
    path: "/api/secao/:id",
}

const secaoPost = {
    action: SecaoApplication.post,
    method: "post",
    path: "/api/secao",
}

const secaoPut = {
    action: SecaoApplication.put,
    method: "put",
    path: "/api/secao",
}

const secaoDelete = {
    action: SecaoApplication.del,
    method: "delete",
    path: "/api/secao",
}

const secaoRecomendada = {
    action: SecaoApplication.secaoRecomendada,
    method: "get",
    path: "/api/secao/recomendada",
}

const SecaoRoutes = [
    secaoRecomendada,
    secaoGet,
    secaoGetById,
    secaoPost,
    secaoPut,
    secaoDelete
    ]

/**
 * Fim das Rotas do Secao
 */

export {
    SecaoRoutes
};
