"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var statusHTTP_1 = require("./../utils/statusHTTP");
var PedidoService = require("../service/PedidoService");
exports.get = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var pedido, err_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, PedidoService.selectAll(request.query)];
            case 1:
                pedido = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                response.send(pedido);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.serverErrorResponse.InternalServerError);
                response.end(err_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getById = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var pedido, err_2;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, PedidoService.selectById(request.params.id)];
            case 1:
                pedido = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                response.send(pedido);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.serverErrorResponse.InternalServerError);
                response.end(err_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.post = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var pedido, err_3;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, PedidoService.save(request.body)];
            case 1:
                pedido = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Created);
                response.send(pedido);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.serverErrorResponse.InternalServerError);
                response.end(err_3.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.put = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var pedido, err_4;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, PedidoService.upgrade(request.body)];
            case 1:
                pedido = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Created);
                response.send(pedido);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.serverErrorResponse.InternalServerError);
                response.end(err_4.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.del = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var pedido, err_5;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, PedidoService.remove(request.body)];
            case 1:
                pedido = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Ok);
                response.send(pedido);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.serverErrorResponse.InternalServerError);
                response.end(err_5.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=PedidoApplication.js.map