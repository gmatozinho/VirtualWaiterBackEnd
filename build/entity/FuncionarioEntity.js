"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var UsuarioEntity_1 = require("./UsuarioEntity");
var EstabelecimentoEntity_1 = require("./EstabelecimentoEntity");
var PessoaEntity_1 = require("./PessoaEntity");
var EnumTipoFuncionario_1 = require("../utils/Enum/EnumTipoFuncionario");
var Funcionario = /** @class */ (function (_super) {
    tslib_1.__extends(Funcionario, _super);
    function Funcionario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column('int', { nullable: false }),
        tslib_1.__metadata("design:type", Number)
    ], Funcionario.prototype, "enumtipofuncionario", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return UsuarioEntity_1.Usuario; }, { cascade: true, eager: true, nullable: true }),
        typeorm_1.JoinColumn(),
        tslib_1.__metadata("design:type", UsuarioEntity_1.Usuario)
    ], Funcionario.prototype, "usuario", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return EstabelecimentoEntity_1.Estabelecimento; }, function (estabelecimento) { return estabelecimento.funcionarios; }, { nullable: false, eager: true }),
        tslib_1.__metadata("design:type", EstabelecimentoEntity_1.Estabelecimento)
    ], Funcionario.prototype, "estabelecimento", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Funcionario.prototype, "ativo", void 0);
    Funcionario = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Funcionario);
    return Funcionario;
}(PessoaEntity_1.Pessoa));
exports.Funcionario = Funcionario;
//# sourceMappingURL=FuncionarioEntity.js.map