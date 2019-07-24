"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlanoApplication = require("../application/PlanoApplication");
/**
 * Inicio das Rotas do Plano
 */
var planoGet = {
    action: PlanoApplication.get,
    method: "get",
    path: "/api/plano",
};
var planoGetById = {
    action: PlanoApplication.getById,
    method: "get",
    path: "/api/plano/:id",
};
var planoPost = {
    action: PlanoApplication.post,
    method: "post",
    path: "/api/plano",
};
var planoPut = {
    action: PlanoApplication.put,
    method: "put",
    path: "/api/plano",
};
var planoDelete = {
    action: PlanoApplication.del,
    method: "delete",
    path: "/api/plano",
};
var PlanoRoutes = [
    planoGet,
    planoGetById,
    planoPost,
    planoPut,
    planoDelete
];
exports.PlanoRoutes = PlanoRoutes;
//# sourceMappingURL=PlanoRoutes.js.map