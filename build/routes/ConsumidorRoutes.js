"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsumidorApplication = require("../application/ConsumidorApplication");
/**
 * Inicio das Rotas do Consumidor
 */
var consumidorGet = {
    action: ConsumidorApplication.get,
    method: "get",
    path: "/api/consumidor",
};
var consumidorGetById = {
    action: ConsumidorApplication.getById,
    method: "get",
    path: "/api/consumidor/:id",
};
var consumidorPost = {
    action: ConsumidorApplication.post,
    method: "post",
    path: "/api/consumidor",
};
var consumidorPut = {
    action: ConsumidorApplication.put,
    method: "put",
    path: "/api/consumidor",
};
var consumidorDelete = {
    action: ConsumidorApplication.del,
    method: "delete",
    path: "/api/consumidor",
};
var ConsumidorRoutes = [
    consumidorGet,
    consumidorGetById,
    consumidorPost,
    consumidorPut,
    consumidorDelete
];
exports.ConsumidorRoutes = ConsumidorRoutes;
//# sourceMappingURL=ConsumidorRoutes.js.map