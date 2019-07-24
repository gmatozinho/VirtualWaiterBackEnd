import * as PlanoApplication from "../application/PlanoApplication";

/**
 * Inicio das Rotas do Plano
 */

const planoGet = {
    action: PlanoApplication.get,
    method: "get",
    path: "/api/plano",
}

const planoGetById = {
    action: PlanoApplication.getById,
    method: "get",
    path: "/api/plano/:id",
}

const planoPost = {
    action: PlanoApplication.post,
    method: "post",
    path: "/api/plano",
}

const planoPut = {
    action: PlanoApplication.put,
    method: "put",
    path: "/api/plano",
}

const planoDelete = {
    action: PlanoApplication.del,
    method: "delete",
    path: "/api/plano",
}

const PlanoRoutes = [
    planoGet,
    planoGetById,
    planoPost,
    planoPut,
    planoDelete]

/**
 * Fim das Rotas do Plano
 */

export {
    PlanoRoutes
};
