"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var UsuarioEntity_1 = require("./UsuarioEntity");
var PessoaEntity_1 = require("./PessoaEntity");
var EstabelecimentoEntity_1 = require("./EstabelecimentoEntity");
var Dono = /** @class */ (function (_super) {
    tslib_1.__extends(Dono, _super);
    function Dono() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return UsuarioEntity_1.Usuario; }, { cascade: true, eager: true, nullable: true }),
        typeorm_1.JoinColumn(),
        tslib_1.__metadata("design:type", UsuarioEntity_1.Usuario)
    ], Dono.prototype, "usuario", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return EstabelecimentoEntity_1.Estabelecimento; }, function (estabelecimento) { return estabelecimento.dono; }, { eager: true }),
        tslib_1.__metadata("design:type", EstabelecimentoEntity_1.Estabelecimento)
    ], Dono.prototype, "estabelecimento", void 0);
    Dono = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Dono);
    return Dono;
}(PessoaEntity_1.Pessoa));
exports.Dono = Dono;
//# sourceMappingURL=DonoEntity.js.map