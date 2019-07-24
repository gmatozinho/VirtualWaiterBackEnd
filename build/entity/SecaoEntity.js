"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var ProdutoEntity_1 = require("./ProdutoEntity");
var CardapioEntity_1 = require("./CardapioEntity");
var Secao = /** @class */ (function () {
    function Secao() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Secao.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Secao.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return ProdutoEntity_1.Produto; }, function (produto) { return produto.secao; }, { eager: true }),
        tslib_1.__metadata("design:type", Array)
    ], Secao.prototype, "produtos", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return CardapioEntity_1.Cardapio; }, function (cardapio) { return cardapio.secoes; }),
        tslib_1.__metadata("design:type", CardapioEntity_1.Cardapio)
    ], Secao.prototype, "cardapio", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Secao.prototype, "ativo", void 0);
    Secao = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Secao);
    return Secao;
}());
exports.Secao = Secao;
//# sourceMappingURL=SecaoEntity.js.map