import * as UsuarioApplication from "../application/UsuarioApplication";

/**
 * Inicio das Rotas do Usuario
 */

const usuarioGet = {
    action: UsuarioApplication.get,
    method: "get",
    path: "/api/usuario",
}

const usuarioGetById = {
    action: UsuarioApplication.getById,
    method: "get",
    path: "/api/usuario/:id",
}

const usuarioPost = {
    action: UsuarioApplication.post,
    method: "post",
    path: "/api/usuario",
}

const usuarioPut = {
    action: UsuarioApplication.put,
    method: "put",
    path: "/api/usuario",
}

const usuarioDelete = {
    action: UsuarioApplication.del,
    method: "delete",
    path: "/api/usuario",
}

const UsuarioRoutes = [
    usuarioGet,
    usuarioGetById,
    usuarioPost,
    usuarioPut,
    usuarioDelete]

/**
 * Fim das Rotas do Usuario
 */

export {
    UsuarioRoutes
};
