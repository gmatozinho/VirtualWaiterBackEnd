"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Endereco.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Endereco.prototype, "bairro", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 128,
            nullable: false,
            type: 'varchar'
        }),
        tslib_1.__metadata("design:type", String)
    ], Endereco.prototype, "cidade", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 2,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Endereco.prototype, "uf", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 128,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Endereco.prototype, "logradouro", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 8,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Endereco.prototype, "cep", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: true,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Endereco.prototype, "complemento", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Endereco.prototype, "numero", void 0);
    Endereco = tslib_1.__decorate([
        typeorm_1.Entity(),
        typeorm_1.Index('cep_numero', ['cep', 'numero'], { unique: true })
    ], Endereco);
    return Endereco;
}());
exports.Endereco = Endereco;
//# sourceMappingURL=EnderecoEntity.js.map