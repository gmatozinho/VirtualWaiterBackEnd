"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsuarioApplication = require("../application/UsuarioApplication");
/**
 * Inicio das Rotas do Usuario
 */
var usuarioGet = {
    action: UsuarioApplication.get,
    method: "get",
    path: "/api/usuario",
};
var usuarioGetById = {
    action: UsuarioApplication.getById,
    method: "get",
    path: "/api/usuario/:id",
};
var usuarioPost = {
    action: UsuarioApplication.post,
    method: "post",
    path: "/api/usuario",
};
var usuarioPut = {
    action: UsuarioApplication.put,
    method: "put",
    path: "/api/usuario",
};
var usuarioDelete = {
    action: UsuarioApplication.del,
    method: "delete",
    path: "/api/usuario",
};
var UsuarioRoutes = [
    usuarioGet,
    usuarioGetById,
    usuarioPost,
    usuarioPut,
    usuarioDelete
];
exports.UsuarioRoutes = UsuarioRoutes;
//# sourceMappingURL=UsuarioRoutes.js.map