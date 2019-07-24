"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProdutoApplication = require("../application/ProdutoApplication");
/**
 * Inicio das Rotas do Produto
 */
var produtoGet = {
    action: ProdutoApplication.get,
    method: "get",
    path: "/api/produto",
};
var produtoGetById = {
    action: ProdutoApplication.getById,
    method: "get",
    path: "/api/produto/:id",
};
var produtoPost = {
    action: ProdutoApplication.post,
    method: "post",
    path: "/api/produto",
};
var produtoPut = {
    action: ProdutoApplication.put,
    method: "put",
    path: "/api/produto",
};
var produtoDelete = {
    action: ProdutoApplication.del,
    method: "delete",
    path: "/api/produto",
};
var ProdutoRoutes = [
    produtoGet,
    produtoGetById,
    produtoPost,
    produtoPut,
    produtoDelete
];
exports.ProdutoRoutes = ProdutoRoutes;
//# sourceMappingURL=ProdutoRoutes.js.map