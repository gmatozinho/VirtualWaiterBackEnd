import * as ConsumidorApplication from "../application/ConsumidorApplication";

/**
 * Inicio das Rotas do Consumidor
 */

const consumidorGet = {
    action: ConsumidorApplication.get,
    method: "get",
    path: "/api/consumidor",
}

const consumidorGetById = {
    action: ConsumidorApplication.getById,
    method: "get",
    path: "/api/consumidor/:id",
}

const consumidorPost = {
    action: ConsumidorApplication.post,
    method: "post",
    path: "/api/consumidor",
}

const consumidorPut = {
    action: ConsumidorApplication.put,
    method: "put",
    path: "/api/consumidor",
}

const consumidorDelete = {
    action: ConsumidorApplication.del,
    method: "delete",
    path: "/api/consumidor",
}

const ConsumidorRoutes = [
    consumidorGet,
    consumidorGetById,
    consumidorPost,
    consumidorPut,
    consumidorDelete]

/**
 * Fim das Rotas do Consumidor
 */

export {
    ConsumidorRoutes
};
