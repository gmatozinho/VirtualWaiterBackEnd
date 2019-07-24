"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PedidoApplication = require("../application/PedidoApplication");
/**
 * Inicio das Rotas do Pedido
 */
var pedidoGet = {
    action: PedidoApplication.get,
    method: "get",
    path: "/api/pedido",
};
var pedidoGetById = {
    action: PedidoApplication.getById,
    method: "get",
    path: "/api/pedido/:id",
};
var pedidoPost = {
    action: PedidoApplication.post,
    method: "post",
    path: "/api/pedido",
};
var pedidoPut = {
    action: PedidoApplication.put,
    method: "put",
    path: "/api/pedido",
};
var pedidoDelete = {
    action: PedidoApplication.del,
    method: "delete",
    path: "/api/pedido",
};
var PedidoRoutes = [
    pedidoGet,
    pedidoGetById,
    pedidoPost,
    pedidoPut,
    pedidoDelete
];
exports.PedidoRoutes = PedidoRoutes;
//# sourceMappingURL=PedidoRoutes.js.map