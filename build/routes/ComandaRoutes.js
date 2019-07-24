"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComandaApplication = require("../application/ComandaApplication");
/**
 * Inicio das Rotas do Comanda
 */
var comandaGet = {
    action: ComandaApplication.get,
    method: "get",
    path: "/api/comanda",
};
var comandaGetById = {
    action: ComandaApplication.getById,
    method: "get",
    path: "/api/comanda/:id",
};
var comandaPost = {
    action: ComandaApplication.post,
    method: "post",
    path: "/api/comanda",
};
var comandaPut = {
    action: ComandaApplication.put,
    method: "put",
    path: "/api/comanda",
};
var comandaDelete = {
    action: ComandaApplication.del,
    method: "delete",
    path: "/api/comanda",
};
var ComandaRoutes = [
    comandaGet,
    comandaGetById,
    comandaPost,
    comandaPut,
    comandaDelete
];
exports.ComandaRoutes = ComandaRoutes;
//# sourceMappingURL=ComandaRoutes.js.map