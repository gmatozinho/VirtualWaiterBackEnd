"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReportApplication = require("../application/ReportApplication");
/**
 * Inicio das Rotas dos Relatórios
 */
var totaldevendasporano = {
    action: ReportApplication.report_totaldevendasporano,
    method: "get",
    path: "/api/report/totaldevendasporano",
};
exports.totaldevendasporano = totaldevendasporano;
var vendapordianomescorrente = {
    action: ReportApplication.report_vendapordianomescorrente,
    method: "get",
    path: "/api/report/vendapordianomescorrente",
};
exports.vendapordianomescorrente = vendapordianomescorrente;
var produtosmaisvendidosentredatas = {
    action: ReportApplication.report_produtosmaisvendidosentredatas,
    method: "get",
    path: "/api/report/produtosmaisvendidosentredatas",
};
exports.produtosmaisvendidosentredatas = produtosmaisvendidosentredatas;
//# sourceMappingURL=ReportRoutes.js.map