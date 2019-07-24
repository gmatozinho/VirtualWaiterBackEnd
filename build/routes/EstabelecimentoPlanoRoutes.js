"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EstabelecimentoPlanoApplication = require("../application/EstabelecimentoPlanoApplication");
/**
 * Inicio das Rotas do EstabelecimentoPlano
 */
var estabelecimentoplanoGet = {
    action: EstabelecimentoPlanoApplication.get,
    method: "get",
    path: "/api/estabelecimentoplano",
};
var estabelecimentoplanoGetById = {
    action: EstabelecimentoPlanoApplication.getById,
    method: "get",
    path: "/api/estabelecimentoplano/:id",
};
var estabelecimentoplanoPost = {
    action: EstabelecimentoPlanoApplication.post,
    method: "post",
    path: "/api/estabelecimentoplano",
};
var estabelecimentoplanoPut = {
    action: EstabelecimentoPlanoApplication.put,
    method: "put",
    path: "/api/estabelecimentoplano",
};
var estabelecimentoplanoDelete = {
    action: EstabelecimentoPlanoApplication.del,
    method: "delete",
    path: "/api/estabelecimentoplano",
};
var EstabelecimentoPlanoRoutes = [
    estabelecimentoplanoGet,
    estabelecimentoplanoGetById,
    estabelecimentoplanoPost,
    estabelecimentoplanoPut,
    estabelecimentoplanoDelete
];
exports.EstabelecimentoPlanoRoutes = EstabelecimentoPlanoRoutes;
//# sourceMappingURL=EstabelecimentoPlanoRoutes.js.map