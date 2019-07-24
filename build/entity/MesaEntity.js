"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ComandaEntity_1 = require("./ComandaEntity");
var typeorm_1 = require("typeorm");
var EstabelecimentoEntity_1 = require("./EstabelecimentoEntity");
var EnumEstadoMesa_1 = require("../utils/Enum/EnumEstadoMesa");
var Mesa = /** @class */ (function () {
    function Mesa() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Mesa.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Number)
    ], Mesa.prototype, "numero", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, unique: true }),
        tslib_1.__metadata("design:type", String)
    ], Mesa.prototype, "codigo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('int'),
        tslib_1.__metadata("design:type", Number)
    ], Mesa.prototype, "enumestadomesa", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return EstabelecimentoEntity_1.Estabelecimento; }, function (estabelecimento) { return estabelecimento.mesas; }, { nullable: false }),
        tslib_1.__metadata("design:type", EstabelecimentoEntity_1.Estabelecimento)
    ], Mesa.prototype, "estabelecimento", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return ComandaEntity_1.Comanda; }, function (comanda) { return comanda.mesa; }, { eager: true }),
        tslib_1.__metadata("design:type", Array)
    ], Mesa.prototype, "comandas", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Mesa.prototype, "ativo", void 0);
    Mesa = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Mesa);
    return Mesa;
}());
exports.Mesa = Mesa;
//# sourceMappingURL=MesaEntity.js.map