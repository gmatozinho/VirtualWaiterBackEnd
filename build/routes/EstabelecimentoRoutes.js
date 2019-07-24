"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EstabelecimentoApplication = require("../application/EstabelecimentoApplication");
/**
 * Inicio das Rotas do Estabelecimento
 */
var estabelecimentoGet = {
    action: EstabelecimentoApplication.get,
    method: "get",
    path: "/api/estabelecimento",
};
var estabelecimentoGetById = {
    action: EstabelecimentoApplication.getById,
    method: "get",
    path: "/api/estabelecimento/:id",
};
var estabelecimentoPost = {
    action: EstabelecimentoApplication.post,
    method: "post",
    path: "/api/estabelecimento",
};
var estabelecimentoPut = {
    action: EstabelecimentoApplication.put,
    method: "put",
    path: "/api/estabelecimento",
};
var estabelecimentoDelete = {
    action: EstabelecimentoApplication.del,
    method: "delete",
    path: "/api/estabelecimento",
};
var EstabelecimentoRoutes = [
    estabelecimentoGet,
    estabelecimentoGetById,
    estabelecimentoPost,
    estabelecimentoPut,
    estabelecimentoDelete
];
exports.EstabelecimentoRoutes = EstabelecimentoRoutes;
//# sourceMappingURL=EstabelecimentoRoutes.js.map