import * as ContaApplication from "../application/ContaApplication";

/**
 * Inicio das Rotas do Conta
 */

const contaGet = {
    action: ContaApplication.get,
    method: "get",
    path: "/api/conta",
}

const contaGetById = {
    action: ContaApplication.getById,
    method: "get",
    path: "/api/conta/:id",
}

const contaPost = {
    action: ContaApplication.post,
    method: "post",
    path: "/api/conta",
}

const contaPut = {
    action: ContaApplication.put,
    method: "put",
    path: "/api/conta",
}

const contaDelete = {
    action: ContaApplication.del,
    method: "delete",
    path: "/api/conta",
}

const ContaRoutes = [
    contaGet,
    contaGetById,
    contaPost,
    contaPut,
    contaDelete]

/**
 * Fim das Rotas do Conta
 */

export {
    ContaRoutes
};
