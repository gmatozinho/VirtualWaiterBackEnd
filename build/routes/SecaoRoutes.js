"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecaoApplication = require("../application/SecaoApplication");
/**
 * Inicio das Rotas do Secao
 */
var secaoGet = {
    action: SecaoApplication.get,
    method: "get",
    path: "/api/secao",
};
var secaoGetById = {
    action: SecaoApplication.getById,
    method: "get",
    path: "/api/secao/:id",
};
var secaoPost = {
    action: SecaoApplication.post,
    method: "post",
    path: "/api/secao",
};
var secaoPut = {
    action: SecaoApplication.put,
    method: "put",
    path: "/api/secao",
};
var secaoDelete = {
    action: SecaoApplication.del,
    method: "delete",
    path: "/api/secao",
};
var secaoRecomendada = {
    action: SecaoApplication.secaoRecomendada,
    method: "get",
    path: "/api/secao/recomendada",
};
var SecaoRoutes = [
    secaoGet,
    secaoGetById,
    secaoPost,
    secaoPut,
    secaoDelete,
    secaoRecomendada
];
exports.SecaoRoutes = SecaoRoutes;
//# sourceMappingURL=SecaoRoutes.js.map