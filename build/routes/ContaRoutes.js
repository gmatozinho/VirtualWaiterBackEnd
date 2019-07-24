"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContaApplication = require("../application/ContaApplication");
/**
 * Inicio das Rotas do Conta
 */
var contaGet = {
    action: ContaApplication.get,
    method: "get",
    path: "/api/conta",
};
var contaGetById = {
    action: ContaApplication.getById,
    method: "get",
    path: "/api/conta/:id",
};
var contaPost = {
    action: ContaApplication.post,
    method: "post",
    path: "/api/conta",
};
var contaPut = {
    action: ContaApplication.put,
    method: "put",
    path: "/api/conta",
};
var contaDelete = {
    action: ContaApplication.del,
    method: "delete",
    path: "/api/conta",
};
var ContaRoutes = [
    contaGet,
    contaGetById,
    contaPost,
    contaPut,
    contaDelete
];
exports.ContaRoutes = ContaRoutes;
//# sourceMappingURL=ContaRoutes.js.map