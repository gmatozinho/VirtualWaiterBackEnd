"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ComandaEntity_1 = require("./ComandaEntity");
var typeorm_1 = require("typeorm");
var ItemEntity_1 = require("./ItemEntity");
var Pedido = /** @class */ (function () {
    function Pedido() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Pedido.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", String)
    ], Pedido.prototype, "codigo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, type: 'timestamp without time zone' }),
        tslib_1.__metadata("design:type", typeorm_1.Timestamp)
    ], Pedido.prototype, "datahora", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return ComandaEntity_1.Comanda; }, function (comanda) { return comanda.pedidos; }, { nullable: false }),
        tslib_1.__metadata("design:type", ComandaEntity_1.Comanda)
    ], Pedido.prototype, "comanda", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return ItemEntity_1.Item; }, function (item) { return item.pedido; }, { cascade: true, eager: true }),
        tslib_1.__metadata("design:type", Array)
    ], Pedido.prototype, "itens", void 0);
    Pedido = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Pedido);
    return Pedido;
}());
exports.Pedido = Pedido;
//# sourceMappingURL=PedidoEntity.js.map