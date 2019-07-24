"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EspecialidadeApplication = require("../application/EspecialidadeApplication");
/**
 * Inicio das Rotas do Especialidade
 */
var especialidadeGet = {
    action: EspecialidadeApplication.get,
    method: "get",
    path: "/api/especialidade",
};
var especialidadeGetById = {
    action: EspecialidadeApplication.getById,
    method: "get",
    path: "/api/especialidade/:id",
};
var especialidadePost = {
    action: EspecialidadeApplication.post,
    method: "post",
    path: "/api/especialidade",
};
var especialidadePut = {
    action: EspecialidadeApplication.put,
    method: "put",
    path: "/api/especialidade",
};
var especialidadeDelete = {
    action: EspecialidadeApplication.del,
    method: "delete",
    path: "/api/especialidade",
};
var EspecialidadeRoutes = [
    especialidadeGet,
    especialidadeGetById,
    especialidadePost,
    especialidadePut,
    especialidadeDelete
];
exports.EspecialidadeRoutes = EspecialidadeRoutes;
//# sourceMappingURL=EspecialidadeRoutes.js.map