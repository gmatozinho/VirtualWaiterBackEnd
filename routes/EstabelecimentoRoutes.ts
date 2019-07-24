import * as EstabelecimentoApplication from "../application/EstabelecimentoApplication";

/**
 * Inicio das Rotas do Estabelecimento
 */

const estabelecimentoGet = {
    action: EstabelecimentoApplication.get,
    method: "get",
    path: "/api/estabelecimento",
}

const estabelecimentoGetById = {
    action: EstabelecimentoApplication.getById,
    method: "get",
    path: "/api/estabelecimento/:id",
}

const estabelecimentoPost = {
    action: EstabelecimentoApplication.post,
    method: "post",
    path: "/api/estabelecimento",
}

const estabelecimentoPut = {
    action: EstabelecimentoApplication.put,
    method: "put",
    path: "/api/estabelecimento",
}

const estabelecimentoDelete = {
    action: EstabelecimentoApplication.del,
    method: "delete",
    path: "/api/estabelecimento",
}

const EstabelecimentoRoutes = [
    estabelecimentoGet,
    estabelecimentoGetById,
    estabelecimentoPost,
    estabelecimentoPut,
    estabelecimentoDelete]

/**
 * Fim das Rotas do Estabelecimento
 */

export {
    EstabelecimentoRoutes
};
