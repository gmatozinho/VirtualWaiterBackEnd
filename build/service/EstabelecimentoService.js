"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_express_query_builder_1 = require("typeorm-express-query-builder");
var typeorm_1 = require("typeorm");
var EstabelecimentoEntity_1 = require("../entity/EstabelecimentoEntity");
var HandleError_1 = require("../error/HandleError");
exports.selectAll = function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var builder, builtQuery, repository, estabelecimentos, err_1, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                builder = new typeorm_express_query_builder_1.QueryBuilder(params);
                builtQuery = builder.build();
                repository = typeorm_1.getRepository(EstabelecimentoEntity_1.Estabelecimento);
                return [4 /*yield*/, repository.find(builtQuery)];
            case 1:
                estabelecimentos = _a.sent();
                return [2 /*return*/, estabelecimentos];
            case 2:
                err_1 = _a.sent();
                det = HandleError_1.HandleErr(err_1);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.selectById = function (id) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var repository, estabelecimento, err_2, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(EstabelecimentoEntity_1.Estabelecimento);
                return [4 /*yield*/, repository.findOne(id)];
            case 1:
                estabelecimento = _a.sent();
                return [2 /*return*/, estabelecimento];
            case 2:
                err_2 = _a.sent();
                det = HandleError_1.HandleErr(err_2);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.save = function (body) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var repository, estabelecimentos, savedData, err_3, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(EstabelecimentoEntity_1.Estabelecimento);
                estabelecimentos = repository.create(body);
                return [4 /*yield*/, repository.save(estabelecimentos)];
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
    var repository, estabelecimentos, upgradedData, err_4, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(EstabelecimentoEntity_1.Estabelecimento);
                estabelecimentos = repository.create(body);
                return [4 /*yield*/, repository.save(estabelecimentos)];
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
    var zero, repository, ArrayIds, estabelecimentos, removedData, oldData, err_5, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                zero = 0;
                repository = typeorm_1.getRepository(EstabelecimentoEntity_1.Estabelecimento);
                ArrayIds = Array.isArray(body.id) ? body.id : [body.id];
                return [4 /*yield*/, repository.findByIds(ArrayIds)];
            case 1:
                estabelecimentos = _a.sent();
                if (!(estabelecimentos !== undefined && estabelecimentos.length > zero)) return [3 /*break*/, 3];
                estabelecimentos.forEach(function (element) { return element.ativo = false; });
                return [4 /*yield*/, repository.save(estabelecimentos)];
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
//# sourceMappingURL=EstabelecimentoService.js.map