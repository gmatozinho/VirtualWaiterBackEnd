"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DonoApplication = require("../application/DonoApplication");
/**
 * Inicio das Rotas do Dono
 */
var donoGet = {
    action: DonoApplication.get,
    method: "get",
    path: "/api/dono",
};
var donoGetById = {
    action: DonoApplication.getById,
    method: "get",
    path: "/api/dono/:id",
};
var donoPost = {
    action: DonoApplication.post,
    method: "post",
    path: "/api/dono",
};
var donoPut = {
    action: DonoApplication.put,
    method: "put",
    path: "/api/dono",
};
var donoDelete = {
    action: DonoApplication.del,
    method: "delete",
    path: "/api/dono",
};
var DonoRoutes = [
    donoGet,
    donoGetById,
    donoPost,
    donoPut,
    donoDelete
];
exports.DonoRoutes = DonoRoutes;
//# sourceMappingURL=DonoRoutes.js.map