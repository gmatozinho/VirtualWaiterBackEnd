"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var SecaoEntity_1 = require("./SecaoEntity");
var Cardapio = /** @class */ (function () {
    function Cardapio() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Cardapio.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Cardapio.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return SecaoEntity_1.Secao; }, function (secao) { return secao.cardapio; }, { cascade: true, eager: true }),
        tslib_1.__metadata("design:type", Array)
    ], Cardapio.prototype, "secoes", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Cardapio.prototype, "ativo", void 0);
    Cardapio = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Cardapio);
    return Cardapio;
}());
exports.Cardapio = Cardapio;
//# sourceMappingURL=CardapioEntity.js.map