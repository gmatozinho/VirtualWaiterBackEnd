"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AvaliacaoEntity_1 = require("./AvaliacaoEntity");
var UsuarioEntity_1 = require("./UsuarioEntity");
var typeorm_1 = require("typeorm");
var ComandaEntity_1 = require("./ComandaEntity");
var Consumidor = /** @class */ (function () {
    function Consumidor() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Consumidor.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Consumidor.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('date', { nullable: true }),
        tslib_1.__metadata("design:type", Date)
    ], Consumidor.prototype, "datanascimento", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('varchar', { length: 20, nullable: false, unique: true }),
        tslib_1.__metadata("design:type", String)
    ], Consumidor.prototype, "celular", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return UsuarioEntity_1.Usuario; }, { cascade: true, eager: true, nullable: true }),
        typeorm_1.JoinColumn(),
        tslib_1.__metadata("design:type", UsuarioEntity_1.Usuario)
    ], Consumidor.prototype, "usuario", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return AvaliacaoEntity_1.Avaliacao; }, function (avaliacao) { return avaliacao.consumidor; }, { eager: true }),
        tslib_1.__metadata("design:type", Array)
    ], Consumidor.prototype, "avaliacoes", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return ComandaEntity_1.Comanda; }, function (comanda) { return comanda.responsavel; }),
        tslib_1.__metadata("design:type", Array)
    ], Consumidor.prototype, "comandasresponsaveis", void 0);
    Consumidor = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Consumidor);
    return Consumidor;
}());
exports.Consumidor = Consumidor;
//# sourceMappingURL=ConsumidorEntity.js.map