import * as MesaApplication from "../application/MesaApplication";

/**
 * Inicio das Rotas do Mesa
 */

const mesaGet = {
    action: MesaApplication.get,
    method: "get",
    path: "/api/mesa",
}

const mesaGetById = {
    action: MesaApplication.getById,
    method: "get",
    path: "/api/mesa/:id",
}

const mesaPost = {
    action: MesaApplication.post,
    method: "post",
    path: "/api/mesa",
}

const mesaPut = {
    action: MesaApplication.put,
    method: "put",
    path: "/api/mesa",
}

const mesaDelete = {
    action: MesaApplication.del,
    method: "delete",
    path: "/api/mesa",
}

const MesaRoutes = [
    mesaGet,
    mesaGetById,
    mesaPost,
    mesaPut,
    mesaDelete]

/**
 * Fim das Rotas do Mesa
 */

export {
    MesaRoutes
};
