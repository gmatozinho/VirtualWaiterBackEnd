"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var EstabelecimentoEntity_1 = require("./EstabelecimentoEntity");
var PlanoEntity_1 = require("./PlanoEntity");
var EstabelecimentoPlano = /** @class */ (function () {
    function EstabelecimentoPlano() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryColumn(),
        tslib_1.__metadata("design:type", Number)
    ], EstabelecimentoPlano.prototype, "estabelecimentoid", void 0);
    tslib_1.__decorate([
        typeorm_1.PrimaryColumn(),
        tslib_1.__metadata("design:type", Number)
    ], EstabelecimentoPlano.prototype, "planoid", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return EstabelecimentoEntity_1.Estabelecimento; }, function (estabelecimento) { return estabelecimento.estabelecimentoplano; }, {
            cascade: true
        }),
        typeorm_1.JoinColumn({ name: 'estabelecimentoid' }),
        tslib_1.__metadata("design:type", EstabelecimentoEntity_1.Estabelecimento)
    ], EstabelecimentoPlano.prototype, "estabelecimento", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return PlanoEntity_1.Plano; }, function (plano) { return plano.estabelecimentoPlano; }, {
            cascade: true
        }),
        typeorm_1.JoinColumn({ name: 'planoid' }),
        tslib_1.__metadata("design:type", PlanoEntity_1.Plano)
    ], EstabelecimentoPlano.prototype, "plano", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "timestamp without time zone", nullable: true }),
        tslib_1.__metadata("design:type", typeorm_1.Timestamp)
    ], EstabelecimentoPlano.prototype, "datainicio", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "timestamp without time zone", nullable: true }),
        tslib_1.__metadata("design:type", typeorm_1.Timestamp)
    ], EstabelecimentoPlano.prototype, "datafim", void 0);
    EstabelecimentoPlano = tslib_1.__decorate([
        typeorm_1.Entity()
    ], EstabelecimentoPlano);
    return EstabelecimentoPlano;
}());
exports.EstabelecimentoPlano = EstabelecimentoPlano;
//# sourceMappingURL=EstabelecimentoPlanoEntity.js.map