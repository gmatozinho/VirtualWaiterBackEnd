"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ComandaEntity_1 = require("./ComandaEntity");
var typeorm_1 = require("typeorm");
var ConsumidorEntity_1 = require("./ConsumidorEntity");
var Avaliacao = /** @class */ (function () {
    function Avaliacao() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Avaliacao.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Avaliacao.prototype, "nota", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('varchar', { length: 255, nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Avaliacao.prototype, "comentario", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return ConsumidorEntity_1.Consumidor; }, function (consumidor) { return consumidor.avaliacoes; }, { nullable: false }),
        tslib_1.__metadata("design:type", ConsumidorEntity_1.Consumidor)
    ], Avaliacao.prototype, "consumidor", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return ComandaEntity_1.Comanda; }, function (comanda) { return comanda.avaliacoes; }, { nullable: false }),
        tslib_1.__metadata("design:type", ComandaEntity_1.Comanda)
    ], Avaliacao.prototype, "comanda", void 0);
    Avaliacao = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Avaliacao);
    return Avaliacao;
}());
exports.Avaliacao = Avaliacao;
//# sourceMappingURL=AvaliacaoEntity.js.map