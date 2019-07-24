"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_express_query_builder_1 = require("typeorm-express-query-builder");
var typeorm_1 = require("typeorm");
var SecaoEntity_1 = require("../entity/SecaoEntity");
var HandleError_1 = require("../error/HandleError");
var ComandaEntity_1 = require("../entity/ComandaEntity");
var ProdutoService = require("../service/ProdutoService");
var statusHTTP_1 = require("../utils/statusHTTP");
exports.selectAll = function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var builder, builtQuery, repository, secoes, err_1, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                builder = new typeorm_express_query_builder_1.QueryBuilder(params);
                builtQuery = builder.build();
                repository = typeorm_1.getRepository(SecaoEntity_1.Secao);
                return [4 /*yield*/, repository.find(builtQuery)];
            case 1:
                secoes = _a.sent();
                return [2 /*return*/, secoes];
            case 2:
                err_1 = _a.sent();
                det = HandleError_1.HandleErr(err_1);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.selectById = function (id) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var repository, secao, err_2, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(SecaoEntity_1.Secao);
                return [4 /*yield*/, repository.findOne(id)];
            case 1:
                secao = _a.sent();
                return [2 /*return*/, secao];
            case 2:
                err_2 = _a.sent();
                det = HandleError_1.HandleErr(err_2);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.save = function (body) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var repository, secoes, savedData, err_3, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(SecaoEntity_1.Secao);
                secoes = repository.create(body);
                return [4 /*yield*/, repository.save(secoes)];
            case 1:
                savedData = _a.sent();
                return [2 /*return*/, savedData];
            case 2:
                err_3 = _a.sent();
                det = HandleError_1.HandleErr(err_3);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.upgrade = function (body) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var repository, secoes, upgradedData, err_4, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(SecaoEntity_1.Secao);
                secoes = repository.create(body);
                return [4 /*yield*/, repository.save(secoes)];
            case 1:
                upgradedData = _a.sent();
                return [2 /*return*/, upgradedData];
            case 2:
                err_4 = _a.sent();
                det = HandleError_1.HandleErr(err_4);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.remove = function (body) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var zero, repository, ArrayIds, secoes, removedData, oldData, err_5, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                zero = 0;
                repository = typeorm_1.getRepository(SecaoEntity_1.Secao);
                ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
                return [4 /*yield*/, repository.findByIds(ArrayIds)];
            case 1:
                secoes = _a.sent();
                if (!(secoes !== undefined && secoes.length > zero)) return [3 /*break*/, 3];
                secoes.forEach(function (element) { return element.ativo = false; });
                return [4 /*yield*/, repository.save(secoes)];
            case 2:
                removedData = _a.sent();
                return [2 /*return*/, removedData];
            case 3: return [4 /*yield*/, repository.create(body)];
            case 4:
                oldData = _a.sent();
                return [2 /*return*/, oldData];
            case 5:
                err_5 = _a.sent();
                det = HandleError_1.HandleErr(err_5);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getRecomendada = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var connection, builder, builtQuery, idEst, limiteDados, qB, result, ids_1, produtos, zero, secaoRecomendada, err_6, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                connection = typeorm_1.getConnection();
                builder = new typeorm_express_query_builder_1.QueryBuilder(request.query);
                builtQuery = builder.build();
                idEst = builtQuery.where.id;
                limiteDados = 5;
                console.log(idEst);
                return [4 /*yield*/, typeorm_1.getRepository(ComandaEntity_1.Comanda)
                        .createQueryBuilder("comanda")
                        .select("produto.id", "pid")
                        .addSelect("count(*)", "QuantidadePedida")
                        .innerJoin("comanda.pedidos", "pedido")
                        .innerJoin("pedido.itens", "item")
                        .innerJoin("item.produto", "produto", "produto.ativo = True")
                        .innerJoin("produto.estabelecimento", "estabelecimento", "estabelecimento.id = :id", { id: idEst })
                        .groupBy("pid")
                        .orderBy("\"QuantidadePedida\"", "DESC")
                        .limit(limiteDados)];
            case 1:
                qB = _a.sent();
                return [4 /*yield*/, connection
                        .createQueryBuilder()
                        .select("\"T\".pid", "pid")
                        .from("(" + qB.getQuery() + ")", "T")
                        .setParameters(qB.getParameters())
                        .getRawMany()];
            case 2:
                result = _a.sent();
                ids_1 = [];
                result.forEach(function (row) { return ids_1.push(row.pid); });
                return [4 /*yield*/, ProdutoService.selectByIds(ids_1)];
            case 3:
                produtos = _a.sent();
                zero = 0;
                if (produtos.length > zero) {
                    secaoRecomendada = new SecaoEntity_1.Secao();
                    secaoRecomendada.ativo = true;
                    secaoRecomendada.descricao = "Recomendadas";
                    secaoRecomendada.id = zero;
                    secaoRecomendada.produtos = produtos;
                    response.send(secaoRecomendada);
                    response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                }
                else {
                    response.send([]);
                    response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                }
                return [3 /*break*/, 5];
            case 4:
                err_6 = _a.sent();
                det = HandleError_1.HandleErr(err_6);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 5: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=SecaoService.js.map