"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var statusHTTP_1 = require("../utils/statusHTTP");
var typeorm_1 = require("typeorm");
var HandleError_1 = require("../error/HandleError");
var ComandaEntity_1 = require("../entity/ComandaEntity");
exports.report_TotaldeVendasPorAno = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var estId, report, err_1, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                estId = request.query.id;
                return [4 /*yield*/, typeorm_1.getRepository(ComandaEntity_1.Comanda)
                        .createQueryBuilder('comanda')
                        .select('sum(conta.total)', 'Total')
                        .addSelect('date_part(\'year\',comanda.horarioinicio)', 'Ano')
                        .innerJoin('comanda.contas', 'conta')
                        .innerJoin('comanda.mesa', 'mesa')
                        .innerJoin('mesa.estabelecimento', 'estabelecimento', 'estabelecimento.id = :id', { id: estId })
                        .groupBy('"Ano"')
                        .addGroupBy('Total')
                        .orderBy('"Ano"')
                        .getRawMany()];
            case 1:
                report = _a.sent();
                response.send(report);
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                det = HandleError_1.HandleErr(err_1);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.report_VendaPorDiaNoMesCorrente = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var estId, report, err_2, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                estId = request.query.id;
                return [4 /*yield*/, typeorm_1.getRepository(ComandaEntity_1.Comanda)
                        .createQueryBuilder('comanda')
                        .select('sum(conta.total)', 'Total')
                        .addSelect('date_part(\'day\',comanda.horarioinicio)', 'Dia')
                        .innerJoin('comanda.contas', 'conta')
                        .innerJoin('comanda.mesa', 'mesa')
                        .innerJoin('mesa.estabelecimento', 'estabelecimento', 'estabelecimento.id = :id', { id: estId })
                        .where('date_part(\'month\',comanda.horarioinicio) = date_part(\'month\',NOW())')
                        .andWhere('date_part(\'year\',comanda.horarioinicio) = date_part(\'year\',NOW())')
                        .groupBy('"Dia"')
                        .orderBy('"Dia"')
                        .getRawMany()];
            case 1:
                report = _a.sent();
                response.send(report);
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                det = HandleError_1.HandleErr(err_2);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.report_ProdutosMaisVendidosEntreDatas = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var estId, dataFim_, dataInicio_, umMes, dataFim, dataInicio, limiteDados, report, err_3, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                estId = request.query.id;
                dataFim_ = new Date(Date.now());
                dataInicio_ = new Date(Date.now());
                umMes = 30;
                dataInicio_.setDate(dataInicio_.getDate() - umMes);
                dataFim = dataFim_.toLocaleDateString();
                dataInicio = dataInicio_.toLocaleDateString();
                limiteDados = 5;
                if (request.query.datainicio != undefined && request.query.datafim != undefined) {
                    dataFim = request.query.datafim; // data mais atual
                    dataInicio = request.query.datainicio; // data mais antiga
                }
                return [4 /*yield*/, typeorm_1.getRepository(ComandaEntity_1.Comanda)
                        .createQueryBuilder('comanda')
                        .select('produto.nome', 'Produto')
                        .addSelect('count(*)', 'QuantidadePedida')
                        .innerJoin('comanda.pedidos', 'pedido')
                        .innerJoin('pedido.itens', 'item')
                        .innerJoin('item.produto', 'produto', 'produto.ativo = True')
                        .innerJoin('produto.estabelecimento', 'estabelecimento', 'estabelecimento.id = :id', { id: estId })
                        .where('pedido.datahora between :datainicio and :datafim', { datainicio: dataInicio, datafim: dataFim })
                        .groupBy('"Produto"')
                        .orderBy('"QuantidadePedida"', 'DESC')
                        .limit(limiteDados)
                        .getRawMany()];
            case 1:
                report = _a.sent();
                response.send(report);
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                det = HandleError_1.HandleErr(err_3);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=ReportService.js.map