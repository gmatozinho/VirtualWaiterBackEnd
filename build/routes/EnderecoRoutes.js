"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnderecoApplication = require("../application/EnderecoApplication");
/**
 * Inicio das Rotas do Endereco
 */
var enderecoGet = {
    action: EnderecoApplication.get,
    method: "get",
    path: "/api/endereco",
};
var enderecoGetById = {
    action: EnderecoApplication.getById,
    method: "get",
    path: "/api/endereco/:id",
};
var enderecoPost = {
    action: EnderecoApplication.post,
    method: "post",
    path: "/api/endereco",
};
var enderecoPut = {
    action: EnderecoApplication.put,
    method: "put",
    path: "/api/endereco",
};
var enderecoDelete = {
    action: EnderecoApplication.del,
    method: "delete",
    path: "/api/endereco",
};
var EnderecoRoutes = [
    enderecoGet,
    enderecoGetById,
    enderecoPost,
    enderecoPut,
    enderecoDelete
];
exports.EnderecoRoutes = EnderecoRoutes;
//# sourceMappingURL=EnderecoRoutes.js.map