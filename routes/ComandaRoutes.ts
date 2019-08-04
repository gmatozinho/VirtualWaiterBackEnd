import * as ComandaApplication from "../application/ComandaApplication";

/**
 * Inicio das Rotas do Comanda
 */

const comandaGet = {
    action: ComandaApplication.get,
    method: "get",
    path: "/api/comanda",
}

const comandaGetById = {
    action: ComandaApplication.getById,
    method: "get",
    path: "/api/comanda/:id",
}

const comandaPost = {
    action: ComandaApplication.post,
    method: "post",
    path: "/api/comanda",
}

const comandaPut = {
    action: ComandaApplication.put,
    method: "put",
    path: "/api/comanda",
}

const comandaDelete = {
    action: ComandaApplication.del,
    method: "delete",
    path: "/api/comanda",
}

const comandaEstabelecimento = {
    action: ComandaApplication.comandaEstabelecimento,
    method: 'get',
    path: '/api/comanda/comandaEstabelecimento',
}

const ComandaRoutes = [
    comandaEstabelecimento,
    comandaGet,
    comandaGetById,
    comandaPost,
    comandaPut,
    comandaDelete
]

/**
 * Fim das Rotas do Comanda
 */

export {
    ComandaRoutes
};
