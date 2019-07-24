"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FuncionarioApplication = require("../application/FuncionarioApplication");
/**
 * Inicio das Rotas do Funcionario
 */
var funcionarioGet = {
    action: FuncionarioApplication.get,
    method: "get",
    path: "/api/funcionario",
};
var funcionarioGetById = {
    action: FuncionarioApplication.getById,
    method: "get",
    path: "/api/funcionario/:id",
};
var funcionarioPost = {
    action: FuncionarioApplication.post,
    method: "post",
    path: "/api/funcionario",
};
var funcionarioPut = {
    action: FuncionarioApplication.put,
    method: "put",
    path: "/api/funcionario",
};
var funcionarioDelete = {
    action: FuncionarioApplication.del,
    method: "delete",
    path: "/api/funcionario",
};
var FuncionarioRoutes = [
    funcionarioGet,
    funcionarioGetById,
    funcionarioPost,
    funcionarioPut,
    funcionarioDelete
];
exports.FuncionarioRoutes = FuncionarioRoutes;
//# sourceMappingURL=FuncionarioRoutes.js.map