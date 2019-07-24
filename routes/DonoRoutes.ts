import * as DonoApplication from "../application/DonoApplication";

/**
 * Inicio das Rotas do Dono
 */

const donoGet = {
    action: DonoApplication.get,
    method: "get",
    path: "/api/dono",
}

const donoGetById = {
    action: DonoApplication.getById,
    method: "get",
    path: "/api/dono/:id",
}

const donoPost = {
    action: DonoApplication.post,
    method: "post",
    path: "/api/dono",
}

const donoPut = {
    action: DonoApplication.put,
    method: "put",
    path: "/api/dono",
}

const donoDelete = {
    action: DonoApplication.del,
    method: "delete",
    path: "/api/dono",
}

const DonoRoutes = [
    donoGet,
    donoGetById,
    donoPost,
    donoPut,
    donoDelete]

/**
 * Fim das Rotas do Dono
 */

export {
    DonoRoutes
};
