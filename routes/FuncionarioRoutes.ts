import * as FuncionarioApplication from "../application/FuncionarioApplication";

/**
 * Inicio das Rotas do Funcionario
 */

const funcionarioGet = {
    action: FuncionarioApplication.get,
    method: "get",
    path: "/api/funcionario",
}

const funcionarioGetById = {
    action: FuncionarioApplication.getById,
    method: "get",
    path: "/api/funcionario/:id",
}

const funcionarioPost = {
    action: FuncionarioApplication.post,
    method: "post",
    path: "/api/funcionario",
}

const funcionarioPut = {
    action: FuncionarioApplication.put,
    method: "put",
    path: "/api/funcionario",
}

const funcionarioDelete = {
    action: FuncionarioApplication.del,
    method: "delete",
    path: "/api/funcionario",
}

const FuncionarioRoutes = [
    funcionarioGet,
    funcionarioGetById,
    funcionarioPost,
    funcionarioPut,
    funcionarioDelete]

/**
 * Fim das Rotas do Funcionario
 */

export {
    FuncionarioRoutes
};
