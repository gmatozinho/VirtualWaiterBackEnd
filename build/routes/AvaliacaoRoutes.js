"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvaliacaoApplication = require("../application/AvaliacaoApplication");
/**
 * Inicio das Rotas do Avaliacao
 */
var avaliacaoGet = {
    action: AvaliacaoApplication.get,
    method: "get",
    path: "/api/avaliacao",
};
var avaliacaoGetById = {
    action: AvaliacaoApplication.getById,
    method: "get",
    path: "/api/avaliacao/:id",
};
var avaliacaoPost = {
    action: AvaliacaoApplication.post,
    method: "post",
    path: "/api/avaliacao",
};
var avaliacaoPut = {
    action: AvaliacaoApplication.put,
    method: "put",
    path: "/api/avaliacao",
};
var avaliacaoDelete = {
    action: AvaliacaoApplication.del,
    method: "delete",
    path: "/api/avaliacao",
};
var AvaliacaoRoutes = [
    avaliacaoGet,
    avaliacaoGetById,
    avaliacaoPost,
    avaliacaoPut,
    avaliacaoDelete
];
exports.AvaliacaoRoutes = AvaliacaoRoutes;
//# sourceMappingURL=AvaliacaoRoutes.js.map