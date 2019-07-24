import * as ProdutoApplication from "../application/ProdutoApplication";

/**
 * Inicio das Rotas do Produto
 */

const produtoGet = {
    action: ProdutoApplication.get,
    method: "get",
    path: "/api/produto",
}

const produtoGetById = {
    action: ProdutoApplication.getById,
    method: "get",
    path: "/api/produto/:id",
}

const produtoPost = {
    action: ProdutoApplication.post,
    method: "post",
    path: "/api/produto",
}

const produtoPut = {
    action: ProdutoApplication.put,
    method: "put",
    path: "/api/produto",
}

const produtoDelete = {
    action: ProdutoApplication.del,
    method: "delete",
    path: "/api/produto",
}

const ProdutoRoutes = [
    produtoGet,
    produtoGetById,
    produtoPost,
    produtoPut,
    produtoDelete]

/**
 * Fim das Rotas do Produto
 */

export {
    ProdutoRoutes
};
