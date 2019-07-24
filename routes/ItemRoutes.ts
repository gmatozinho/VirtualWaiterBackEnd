import * as ItemApplication from "../application/ItemApplication";

/**
 * Inicio das Rotas do Item
 */

const itemGet = {
    action: ItemApplication.get,
    method: "get",
    path: "/api/item",
}

const itemGetById = {
    action: ItemApplication.getById,
    method: "get",
    path: "/api/item/:id",
}

const itemPost = {
    action: ItemApplication.post,
    method: "post",
    path: "/api/item",
}

const itemPut = {
    action: ItemApplication.put,
    method: "put",
    path: "/api/item",
}

const itemDelete = {
    action: ItemApplication.del,
    method: "delete",
    path: "/api/item",
}

const ItemRoutes = [
    itemGet,
    itemGetById,
    itemPost,
    itemPut,
    itemDelete]

/**
 * Fim das Rotas do Item
 */

export {
    ItemRoutes
};
