import * as EstabelecimentoPlanoApplication from "../application/EstabelecimentoPlanoApplication";

/**
 * Inicio das Rotas do EstabelecimentoPlano
 */

const estabelecimentoplanoGet = {
    action: EstabelecimentoPlanoApplication.get,
    method: "get",
    path: "/api/estabelecimentoplano",
}

const estabelecimentoplanoGetById = {
    action: EstabelecimentoPlanoApplication.getById,
    method: "get",
    path: "/api/estabelecimentoplano/:id",
}

const estabelecimentoplanoPost = {
    action: EstabelecimentoPlanoApplication.post,
    method: "post",
    path: "/api/estabelecimentoplano",
}

const estabelecimentoplanoPut = {
    action: EstabelecimentoPlanoApplication.put,
    method: "put",
    path: "/api/estabelecimentoplano",
}

const estabelecimentoplanoDelete = {
    action: EstabelecimentoPlanoApplication.del,
    method: "delete",
    path: "/api/estabelecimentoplano",
}

const EstabelecimentoPlanoRoutes = [
    estabelecimentoplanoGet,
    estabelecimentoplanoGetById,
    estabelecimentoplanoPost,
    estabelecimentoplanoPut,
    estabelecimentoplanoDelete]

/**
 * Fim das Rotas do EstabelecimentoPlano
 */

export {
    EstabelecimentoPlanoRoutes
};
