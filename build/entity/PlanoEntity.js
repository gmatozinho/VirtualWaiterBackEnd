"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var EstabelecimentoPlanoEntity_1 = require("./EstabelecimentoPlanoEntity");
var Plano = /** @class */ (function () {
    function Plano() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Plano.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: true,
            type: "varchar",
        }),
        tslib_1.__metadata("design:type", String)
    ], Plano.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: true,
            type: "varchar",
        }),
        tslib_1.__metadata("design:type", String)
    ], Plano.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Plano.prototype, "valor", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Plano.prototype, "duracao", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return EstabelecimentoPlanoEntity_1.EstabelecimentoPlano; }, function (estabelecimentoPlano) { return estabelecimentoPlano.plano; }),
        tslib_1.__metadata("design:type", Array)
    ], Plano.prototype, "estabelecimentoPlano", void 0);
    Plano = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Plano);
    return Plano;
}());
exports.Plano = Plano;
//# sourceMappingURL=PlanoEntity.js.map