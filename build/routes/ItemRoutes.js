"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemApplication = require("../application/ItemApplication");
/**
 * Inicio das Rotas do Item
 */
var itemGet = {
    action: ItemApplication.get,
    method: "get",
    path: "/api/item",
};
var itemGetById = {
    action: ItemApplication.getById,
    method: "get",
    path: "/api/item/:id",
};
var itemPost = {
    action: ItemApplication.post,
    method: "post",
    path: "/api/item",
};
var itemPut = {
    action: ItemApplication.put,
    method: "put",
    path: "/api/item",
};
var itemDelete = {
    action: ItemApplication.del,
    method: "delete",
    path: "/api/item",
};
var ItemRoutes = [
    itemGet,
    itemGetById,
    itemPost,
    itemPut,
    itemDelete
];
exports.ItemRoutes = ItemRoutes;
//# sourceMappingURL=ItemRoutes.js.map