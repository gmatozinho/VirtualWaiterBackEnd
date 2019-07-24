"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_express_query_builder_1 = require("typeorm-express-query-builder");
var typeorm_1 = require("typeorm");
var ConsumidorEntity_1 = require("../entity/ConsumidorEntity");
var HandleError_1 = require("../error/HandleError");
exports.selectAll = function (params) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var builder, builtQuery, repository, consumidores, err_1, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                builder = new typeorm_express_query_builder_1.QueryBuilder(params);
                builtQuery = builder.build();
                repository = typeorm_1.getRepository(ConsumidorEntity_1.Consumidor);
                return [4 /*yield*/, repository.find(builtQuery)];
            case 1:
                consumidores = _a.sent();
                return [2 /*return*/, consumidores];
            case 2:
                err_1 = _a.sent();
                det = HandleError_1.HandleErr(err_1);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.selectById = function (id) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var repository, consumidor, err_2, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(ConsumidorEntity_1.Consumidor);
                return [4 /*yield*/, repository.findOne(id)];
            case 1:
                consumidor = _a.sent();
                return [2 /*return*/, consumidor];
            case 2:
                err_2 = _a.sent();
                det = HandleError_1.HandleErr(err_2);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.save = function (body) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var repository, consumidores, savedData, err_3, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(ConsumidorEntity_1.Consumidor);
                consumidores = repository.create(body);
                return [4 /*yield*/, repository.save(consumidores)];
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
    var repository, consumidores, upgradedData, err_4, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(ConsumidorEntity_1.Consumidor);
                consumidores = repository.create(body);
                return [4 /*yield*/, repository.save(consumidores)];
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
    var repository, oldData, err_5, det;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                repository = typeorm_1.getRepository(ConsumidorEntity_1.Consumidor);
                return [4 /*yield*/, repository.create(body)];
            case 1:
                oldData = _a.sent();
                return [2 /*return*/, oldData];
            case 2:
                err_5 = _a.sent();
                det = HandleError_1.HandleErr(err_5);
                throw new Error("{\"codigo\": " + det.codigo + ",\"message\": " + det.message + "}");
            case 3: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=ConsumidorService.js.map