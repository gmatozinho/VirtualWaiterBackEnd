import * as EspecialidadeApplication from "../application/EspecialidadeApplication";

/**
 * Inicio das Rotas do Especialidade
 */

const especialidadeGet = {
    action: EspecialidadeApplication.get,
    method: "get",
    path: "/api/especialidade",
}

const especialidadeGetById = {
    action: EspecialidadeApplication.getById,
    method: "get",
    path: "/api/especialidade/:id",
}

const especialidadePost = {
    action: EspecialidadeApplication.post,
    method: "post",
    path: "/api/especialidade",
}

const especialidadePut = {
    action: EspecialidadeApplication.put,
    method: "put",
    path: "/api/especialidade",
}

const especialidadeDelete = {
    action: EspecialidadeApplication.del,
    method: "delete",
    path: "/api/especialidade",
}

const EspecialidadeRoutes = [
    especialidadeGet,
    especialidadeGetById,
    especialidadePost,
    especialidadePut,
    especialidadeDelete]

/**
 * Fim das Rotas do Especialidade
 */

export {
    EspecialidadeRoutes
};
