"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var EstabelecimentoAddCardapio1558948261857 = /** @class */ (function () {
    function EstabelecimentoAddCardapio1558948261857() {
    }
    EstabelecimentoAddCardapio1558948261857.prototype.up = function (queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query(' ALTER TABLE CARDAPIO DROP "estabelecimentoId" ')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(' ALTER TABLE ESTABELECIMENTO ADD "cardapioId" INT4 NULL ')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(' ALTER TABLE ESTABELECIMENTO ADD CONSTRAINT ' +
                                ' fk_d35a276174459bb0581d FOREIGN KEY ("cardapioId") REFERENCES CARDAPIO (ID) ')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EstabelecimentoAddCardapio1558948261857.prototype.down = function (queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query(' ALTER TABLE ESTABELECIMENTO DROP "cardapioId" ')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(' ALTER TABLE CARDAPIO ADD "estabelecimentoId" INT4 ')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(' ALTER TABLE CARDAPIO ADD CONSTRAINT ' +
                                ' fk_d35a276174459bb0581d FOREIGN KEY ("estabelecimentoId") REFERENCES ESTABELECIMENTO (ID) ')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return EstabelecimentoAddCardapio1558948261857;
}());
exports.EstabelecimentoAddCardapio1558948261857 = EstabelecimentoAddCardapio1558948261857;
//# sourceMappingURL=1558948261857-EstabelecimentoAddCardapio.js.map