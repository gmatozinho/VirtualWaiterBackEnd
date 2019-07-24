"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MesaApplication = require("../application/MesaApplication");
/**
 * Inicio das Rotas do Mesa
 */
var mesaGet = {
    action: MesaApplication.get,
    method: "get",
    path: "/api/mesa",
};
var mesaGetById = {
    action: MesaApplication.getById,
    method: "get",
    path: "/api/mesa/:id",
};
var mesaPost = {
    action: MesaApplication.post,
    method: "post",
    path: "/api/mesa",
};
var mesaPut = {
    action: MesaApplication.put,
    method: "put",
    path: "/api/mesa",
};
var mesaDelete = {
    action: MesaApplication.del,
    method: "delete",
    path: "/api/mesa",
};
var MesaRoutes = [
    mesaGet,
    mesaGetById,
    mesaPost,
    mesaPut,
    mesaDelete
];
exports.MesaRoutes = MesaRoutes;
//# sourceMappingURL=MesaRoutes.js.map