"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var ComandaEntity_1 = require("./ComandaEntity");
var EnumFormaPagamento_1 = require("../utils/Enum/EnumFormaPagamento");
var Conta = /** @class */ (function () {
    function Conta() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Conta.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Conta.prototype, "total", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Conta.prototype, "taxaservico", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('int', { nullable: false }),
        tslib_1.__metadata("design:type", Number)
    ], Conta.prototype, "enumformapagamento", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return ComandaEntity_1.Comanda; }, function (comanda) { return comanda.contas; }, { nullable: false }),
        tslib_1.__metadata("design:type", ComandaEntity_1.Comanda)
    ], Conta.prototype, "comanda", void 0);
    Conta = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Conta);
    return Conta;
}());
exports.Conta = Conta;
//# sourceMappingURL=ContaEntity.js.map