"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var EstabelecimentoEntity_1 = require("./EstabelecimentoEntity");
var Especialidade = /** @class */ (function () {
    function Especialidade() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Especialidade.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: false,
            type: 'varchar',
            unique: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Especialidade.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return EstabelecimentoEntity_1.Estabelecimento; }, function (estabelecimento) { return estabelecimento.especialidade; }),
        tslib_1.__metadata("design:type", Array)
    ], Especialidade.prototype, "estabelecimentos", void 0);
    Especialidade = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Especialidade);
    return Especialidade;
}());
exports.Especialidade = Especialidade;
//# sourceMappingURL=EspecialidadeEntity.js.map