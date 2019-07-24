import * as CardapioApplication from "../application/CardapioApplication";

/**
 * Inicio das Rotas do Cardapio
 */

const cardapioGet = {
    action: CardapioApplication.get,
    method: "get",
    path: "/api/cardapio",
}

const cardapioGetById = {
    action: CardapioApplication.getById,
    method: "get",
    path: "/api/cardapio/:id",
}

const cardapioPost = {
    action: CardapioApplication.post,
    method: "post",
    path: "/api/cardapio",
}

const cardapioPut = {
    action: CardapioApplication.put,
    method: "put",
    path: "/api/cardapio",
}

const cardapioDelete = {
    action: CardapioApplication.del,
    method: "delete",
    path: "/api/cardapio",
}

const CardapioRoutes = [
    cardapioGet,
    cardapioGetById,
    cardapioPost,
    cardapioPut,
    cardapioDelete]

/**
 * Fim das Rotas do Cardapio
 */

export {
    CardapioRoutes
};
