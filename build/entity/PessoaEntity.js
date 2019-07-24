"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var EnumOrgaoEmissor_1 = require("../utils/Enum/EnumOrgaoEmissor");
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Pessoa.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Pessoa.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: true,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Pessoa.prototype, "sobrenome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('date', { nullable: true }),
        tslib_1.__metadata("design:type", Date)
    ], Pessoa.prototype, "datanascimento", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 11,
            nullable: true,
            type: 'varchar',
            unique: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Pessoa.prototype, "cpf", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 20,
            nullable: true,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Pessoa.prototype, "rg", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('int', { nullable: true }),
        tslib_1.__metadata("design:type", Number)
    ], Pessoa.prototype, "enumorgaoemissor", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('varchar', { length: 20, nullable: true, unique: true }),
        tslib_1.__metadata("design:type", String)
    ], Pessoa.prototype, "celular", void 0);
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//# sourceMappingURL=PessoaEntity.js.map