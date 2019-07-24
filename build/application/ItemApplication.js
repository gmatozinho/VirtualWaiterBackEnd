"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var statusHTTP_1 = require("./../utils/statusHTTP");
var ItemService = require("../service/ItemService");
exports.get = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var item, err_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ItemService.selectAll(request.query)];
            case 1:
                item = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                response.send(item);
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
    var item, err_2;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ItemService.selectById(request.params.id)];
            case 1:
                item = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Accepted);
                response.send(item);
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
    var item, err_3;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ItemService.save(request.body)];
            case 1:
                item = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Created);
                response.send(item);
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
    var item, err_4;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ItemService.upgrade(request.body)];
            case 1:
                item = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Created);
                response.send(item);
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
    var item, err_5;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ItemService.remove(request.body)];
            case 1:
                item = _a.sent();
                response.status(statusHTTP_1.statusHTTPCode.sucessResponse.Ok);
                response.send(item);
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
//# sourceMappingURL=ItemApplication.js.map