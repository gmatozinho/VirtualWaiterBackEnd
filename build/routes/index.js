"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvaliacaoRoutes_1 = require("./AvaliacaoRoutes");
var CardapioRoutes_1 = require("./CardapioRoutes");
var ComandaRoutes_1 = require("./ComandaRoutes");
var ConsumidorRoutes_1 = require("./ConsumidorRoutes");
var ContaRoutes_1 = require("./ContaRoutes");
var DonoRoutes_1 = require("./DonoRoutes");
var EnderecoRoutes_1 = require("./EnderecoRoutes");
var EspecialidadeRoutes_1 = require("./EspecialidadeRoutes");
var EstabelecimentoRoutes_1 = require("./EstabelecimentoRoutes");
var EstabelecimentoPlanoRoutes_1 = require("./EstabelecimentoPlanoRoutes");
var FuncionarioRoutes_1 = require("./FuncionarioRoutes");
var ItemRoutes_1 = require("./ItemRoutes");
var MesaRoutes_1 = require("./MesaRoutes");
var PedidoRoutes_1 = require("./PedidoRoutes");
var PlanoRoutes_1 = require("./PlanoRoutes");
var ProdutoRoutes_1 = require("./ProdutoRoutes");
var SecaoRoutes_1 = require("./SecaoRoutes");
var UsuarioRoutes_1 = require("./UsuarioRoutes");
var ReportRoutes = require("./ReportRoutes");
/**
 * All application routes.
 */
var allRoutes = [
    ReportRoutes.totaldevendasporano,
    ReportRoutes.vendapordianomescorrente,
    ReportRoutes.produtosmaisvendidosentredatas,
];
AvaliacaoRoutes_1.AvaliacaoRoutes.forEach(function (element) { return allRoutes.push(element); });
CardapioRoutes_1.CardapioRoutes.forEach(function (element) { return allRoutes.push(element); });
ComandaRoutes_1.ComandaRoutes.forEach(function (element) { return allRoutes.push(element); });
ContaRoutes_1.ContaRoutes.forEach(function (element) { return allRoutes.push(element); });
ConsumidorRoutes_1.ConsumidorRoutes.forEach(function (element) { return allRoutes.push(element); });
DonoRoutes_1.DonoRoutes.forEach(function (element) { return allRoutes.push(element); });
EnderecoRoutes_1.EnderecoRoutes.forEach(function (element) { return allRoutes.push(element); });
EspecialidadeRoutes_1.EspecialidadeRoutes.forEach(function (element) { return allRoutes.push(element); });
EstabelecimentoRoutes_1.EstabelecimentoRoutes.forEach(function (element) { return allRoutes.push(element); });
EstabelecimentoPlanoRoutes_1.EstabelecimentoPlanoRoutes.forEach(function (element) { return allRoutes.push(element); });
FuncionarioRoutes_1.FuncionarioRoutes.forEach(function (element) { return allRoutes.push(element); });
ItemRoutes_1.ItemRoutes.forEach(function (element) { return allRoutes.push(element); });
MesaRoutes_1.MesaRoutes.forEach(function (element) { return allRoutes.push(element); });
PedidoRoutes_1.PedidoRoutes.forEach(function (element) { return allRoutes.push(element); });
PlanoRoutes_1.PlanoRoutes.forEach(function (element) { return allRoutes.push(element); });
ProdutoRoutes_1.ProdutoRoutes.forEach(function (element) { return allRoutes.push(element); });
SecaoRoutes_1.SecaoRoutes.forEach(function (element) { return allRoutes.push(element); });
UsuarioRoutes_1.UsuarioRoutes.forEach(function (element) { return allRoutes.push(element); });
exports.AppRoutes = allRoutes;
//# sourceMappingURL=index.js.map