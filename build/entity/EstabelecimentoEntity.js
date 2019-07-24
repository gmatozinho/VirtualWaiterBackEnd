"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var EstabelecimentoPlanoEntity_1 = require("./EstabelecimentoPlanoEntity");
var EspecialidadeEntity_1 = require("./EspecialidadeEntity");
var FuncionarioEntity_1 = require("./FuncionarioEntity");
var typeorm_1 = require("typeorm");
var MesaEntity_1 = require("./MesaEntity");
var EnderecoEntity_1 = require("./EnderecoEntity");
var ProdutoEntity_1 = require("./ProdutoEntity");
var DonoEntity_1 = require("./DonoEntity");
var CardapioEntity_1 = require("./CardapioEntity");
var Estabelecimento = /** @class */ (function () {
    function Estabelecimento() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Estabelecimento.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Estabelecimento.prototype, "razaosocial", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 30,
            nullable: false,
            type: 'varchar',
            unique: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Estabelecimento.prototype, "cnpj", void 0);
    tslib_1.__decorate([
        typeorm_1.Index(),
        typeorm_1.Column({
            length: 100,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Estabelecimento.prototype, "nome", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: true,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Estabelecimento.prototype, "descricao", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 255,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Estabelecimento.prototype, "horariofuncionamento", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('varchar', { length: 11, nullable: false }),
        tslib_1.__metadata("design:type", String)
    ], Estabelecimento.prototype, "telefone", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            nullable: true,
            type: 'text',
        }),
        tslib_1.__metadata("design:type", String)
    ], Estabelecimento.prototype, "logo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: 'float' }),
        tslib_1.__metadata("design:type", Number)
    ], Estabelecimento.prototype, "avaliacaomedia", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Estabelecimento.prototype, "ativo", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Estabelecimento.prototype, "aberto", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return FuncionarioEntity_1.Funcionario; }, function (funcionario) { return funcionario.estabelecimento; }),
        tslib_1.__metadata("design:type", Array)
    ], Estabelecimento.prototype, "funcionarios", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return MesaEntity_1.Mesa; }, function (mesa) { return mesa.estabelecimento; }, { eager: false }),
        tslib_1.__metadata("design:type", Array)
    ], Estabelecimento.prototype, "mesas", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return ProdutoEntity_1.Produto; }, function (produto) { return produto.estabelecimento; }, { eager: false }),
        tslib_1.__metadata("design:type", Array)
    ], Estabelecimento.prototype, "produtos", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return EspecialidadeEntity_1.Especialidade; }, function (especialidade) { return especialidade.estabelecimentos; }, { eager: true, nullable: false }),
        tslib_1.__metadata("design:type", EspecialidadeEntity_1.Especialidade)
    ], Estabelecimento.prototype, "especialidade", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return EnderecoEntity_1.Endereco; }, { cascade: true, eager: true, nullable: false }),
        typeorm_1.JoinColumn(),
        tslib_1.__metadata("design:type", EnderecoEntity_1.Endereco)
    ], Estabelecimento.prototype, "endereco", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return DonoEntity_1.Dono; }, { cascade: true, eager: false, nullable: false }),
        typeorm_1.JoinColumn(),
        tslib_1.__metadata("design:type", DonoEntity_1.Dono)
    ], Estabelecimento.prototype, "dono", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return CardapioEntity_1.Cardapio; }, { nullable: false, eager: true, cascade: true }),
        typeorm_1.JoinColumn(),
        tslib_1.__metadata("design:type", CardapioEntity_1.Cardapio)
    ], Estabelecimento.prototype, "cardapio", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return EstabelecimentoPlanoEntity_1.EstabelecimentoPlano; }, function (EstabelecimentoPlanoEntity) { return EstabelecimentoPlanoEntity.estabelecimento; }),
        tslib_1.__metadata("design:type", Array)
    ], Estabelecimento.prototype, "estabelecimentoplano", void 0);
    Estabelecimento = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Estabelecimento);
    return Estabelecimento;
}());
exports.Estabelecimento = Estabelecimento;
//# sourceMappingURL=EstabelecimentoEntity.js.map