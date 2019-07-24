"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardapioApplication = require("../application/CardapioApplication");
/**
 * Inicio das Rotas do Cardapio
 */
var cardapioGet = {
    action: CardapioApplication.get,
    method: "get",
    path: "/api/cardapio",
};
var cardapioGetById = {
    action: CardapioApplication.getById,
    method: "get",
    path: "/api/cardapio/:id",
};
var cardapioPost = {
    action: CardapioApplication.post,
    method: "post",
    path: "/api/cardapio",
};
var cardapioPut = {
    action: CardapioApplication.put,
    method: "put",
    path: "/api/cardapio",
};
var cardapioDelete = {
    action: CardapioApplication.del,
    method: "delete",
    path: "/api/cardapio",
};
var CardapioRoutes = [
    cardapioGet,
    cardapioGetById,
    cardapioPost,
    cardapioPut,
    cardapioDelete
];
exports.CardapioRoutes = CardapioRoutes;
//# sourceMappingURL=CardapioRoutes.js.map