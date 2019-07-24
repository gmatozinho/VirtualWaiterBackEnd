"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var ItemEntity_1 = require("./ItemEntity");
var EstabelecimentoEntity_1 = require("./EstabelecimentoEntity");
var SecaoEntity_1 = require("./SecaoEntity");
var Produto = /** @class */ (function () {
    function Produto() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Produto.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: false,
            type: 'varchar'
        }),
        tslib_1.__metadata("design:type", String)
    ], Produto.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: true,
            type: 'varchar'
        }),
        tslib_1.__metadata("design:type", String)
    ], Produto.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false, type: "float" }),
        tslib_1.__metadata("design:type", Number)
    ], Produto.prototype, "preco", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            nullable: true,
            type: 'text'
        }),
        tslib_1.__metadata("design:type", String)
    ], Produto.prototype, "foto", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Produto.prototype, "empromocao", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, precision: 2, type: 'decimal' }),
        tslib_1.__metadata("design:type", typeorm_1.Double)
    ], Produto.prototype, "descontopromocional", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Produto.prototype, "ativo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Number)
    ], Produto.prototype, "tempopreparo", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return ItemEntity_1.Item; }, function (item) { return item.produto; }, { eager: false }),
        tslib_1.__metadata("design:type", Array)
    ], Produto.prototype, "itens", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return EstabelecimentoEntity_1.Estabelecimento; }, function (estabelecimento) { return estabelecimento.produtos; }, { nullable: false }),
        tslib_1.__metadata("design:type", EstabelecimentoEntity_1.Estabelecimento)
    ], Produto.prototype, "estabelecimento", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return SecaoEntity_1.Secao; }, function (secao) { return secao.produtos; }, { nullable: false }),
        tslib_1.__metadata("design:type", SecaoEntity_1.Secao)
    ], Produto.prototype, "secao", void 0);
    Produto = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Produto);
    return Produto;
}());
exports.Produto = Produto;
//# sourceMappingURL=ProdutoEntity.js.map