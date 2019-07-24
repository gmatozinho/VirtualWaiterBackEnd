"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PedidoEntity_1 = require("./PedidoEntity");
var ConsumidorEntity_1 = require("./ConsumidorEntity");
var MesaEntity_1 = require("./MesaEntity");
var typeorm_1 = require("typeorm");
var AvaliacaoEntity_1 = require("./AvaliacaoEntity");
var ContaEntity_1 = require("./ContaEntity");
var EnumSituacaoComanda_1 = require("../utils/Enum/EnumSituacaoComanda");
var Comanda = /** @class */ (function () {
    function Comanda() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Comanda.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('int', { nullable: false, default: 1 }),
        tslib_1.__metadata("design:type", Number)
    ], Comanda.prototype, "enumsituacaocomanda", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: 'timestamp without time zone', nullable: false }),
        tslib_1.__metadata("design:type", typeorm_1.Timestamp)
    ], Comanda.prototype, "horarioinicio", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: 'timestamp without time zone', nullable: true }),
        tslib_1.__metadata("design:type", typeorm_1.Timestamp)
    ], Comanda.prototype, "horariofim", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToMany(function () { return ConsumidorEntity_1.Consumidor; }, { eager: true }),
        typeorm_1.JoinTable(),
        tslib_1.__metadata("design:type", Array)
    ], Comanda.prototype, "consumidores", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return MesaEntity_1.Mesa; }, function (mesa) { return mesa.comandas; }, { eager: false }),
        tslib_1.__metadata("design:type", MesaEntity_1.Mesa)
    ], Comanda.prototype, "mesa", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return PedidoEntity_1.Pedido; }, function (pedido) { return pedido.comanda; }, { eager: true }),
        tslib_1.__metadata("design:type", Array)
    ], Comanda.prototype, "pedidos", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return ContaEntity_1.Conta; }, function (conta) { return conta.comanda; }, { eager: true }),
        tslib_1.__metadata("design:type", Array)
    ], Comanda.prototype, "contas", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return AvaliacaoEntity_1.Avaliacao; }, function (avaliacao) { return avaliacao.comanda; }, { eager: true }),
        tslib_1.__metadata("design:type", Array)
    ], Comanda.prototype, "avaliacoes", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return ConsumidorEntity_1.Consumidor; }, function (consumidor) { return consumidor.comandasresponsaveis; }, { eager: true, cascade: true, nullable: false }),
        tslib_1.__metadata("design:type", ConsumidorEntity_1.Consumidor)
    ], Comanda.prototype, "responsavel", void 0);
    Comanda = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Comanda);
    return Comanda;
}());
exports.Comanda = Comanda;
//# sourceMappingURL=ComandaEntity.js.map