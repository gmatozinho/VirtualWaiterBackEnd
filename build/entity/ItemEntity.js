"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ProdutoEntity_1 = require("./ProdutoEntity");
var typeorm_1 = require("typeorm");
var PedidoEntity_1 = require("./PedidoEntity");
var Item = /** @class */ (function () {
    function Item() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Item.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Number)
    ], Item.prototype, "quantidade", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: true,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Item.prototype, "observacoes", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Item.prototype, "preco", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ default: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Item.prototype, "entregue", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return PedidoEntity_1.Pedido; }, function (pedido) { return pedido.itens; }, { nullable: false }),
        tslib_1.__metadata("design:type", PedidoEntity_1.Pedido)
    ], Item.prototype, "pedido", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return ProdutoEntity_1.Produto; }, function (produto) { return produto.itens; }, { nullable: false, eager: true }),
        tslib_1.__metadata("design:type", ProdutoEntity_1.Produto)
    ], Item.prototype, "produto", void 0);
    Item = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Item);
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=ItemEntity.js.map