import * as PedidoApplication from "../application/PedidoApplication";

/**
 * Inicio das Rotas do Pedido
 */

const pedidoGet = {
    action: PedidoApplication.get,
    method: "get",
    path: "/api/pedido",
}

const pedidoGetById = {
    action: PedidoApplication.getById,
    method: "get",
    path: "/api/pedido/:id",
}

const pedidoPost = {
    action: PedidoApplication.post,
    method: "post",
    path: "/api/pedido",
}

const pedidoPut = {
    action: PedidoApplication.put,
    method: "put",
    path: "/api/pedido",
}

const pedidoDelete = {
    action: PedidoApplication.del,
    method: "delete",
    path: "/api/pedido",
}

const PedidoRoutes = [
    pedidoGet,
    pedidoGetById,
    pedidoPost,
    pedidoPut,
    pedidoDelete]

/**
 * Fim das Rotas do Pedido
 */

export {
    PedidoRoutes
};
