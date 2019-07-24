import * as AvaliacaoApplication from "../application/AvaliacaoApplication";

/**
 * Inicio das Rotas do Avaliacao
 */

const avaliacaoGet = {
    action: AvaliacaoApplication.get,
    method: "get",
    path: "/api/avaliacao",
}

const avaliacaoGetById = {
    action: AvaliacaoApplication.getById,
    method: "get",
    path: "/api/avaliacao/:id",
}

const avaliacaoPost = {
    action: AvaliacaoApplication.post,
    method: "post",
    path: "/api/avaliacao",
}

const avaliacaoPut = {
    action: AvaliacaoApplication.put,
    method: "put",
    path: "/api/avaliacao",
}

const avaliacaoDelete = {
    action: AvaliacaoApplication.del,
    method: "delete",
    path: "/api/avaliacao",
}

const AvaliacaoRoutes = [
    avaliacaoGet,
    avaliacaoGetById,
    avaliacaoPost,
    avaliacaoPut,
    avaliacaoDelete]

/**
 * Fim das Rotas do Avaliacao
 */

export {
    AvaliacaoRoutes
};
