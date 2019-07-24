"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ReportService = require("../service/ReportService");
exports.report_totaldevendasporano = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ReportService.report_TotaldeVendasPorAno(request, response)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.report_vendapordianomescorrente = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ReportService.report_VendaPorDiaNoMesCorrente(request, response)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.report_produtosmaisvendidosentredatas = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ReportService.report_ProdutosMaisVendidosEntreDatas(request, response)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=ReportApplication.js.map