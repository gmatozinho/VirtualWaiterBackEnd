"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var EnumOrigemCriacao_1 = require("../utils/Enum/EnumOrigemCriacao");
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Usuario.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            length: 100,
            nullable: false,
            type: 'varchar',
        }),
        tslib_1.__metadata("design:type", String)
    ], Usuario.prototype, "email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('varchar', { length: 50, unique: true }),
        tslib_1.__metadata("design:type", String)
    ], Usuario.prototype, "uid", void 0);
    tslib_1.__decorate([
        typeorm_1.Column('int', { nullable: false }),
        tslib_1.__metadata("design:type", Number)
    ], Usuario.prototype, "enumorigemcriacao", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Usuario.prototype, "ativo", void 0);
    Usuario = tslib_1.__decorate([
        typeorm_1.Entity(),
        typeorm_1.Index('email_enumcriacaoorigem', ['email', 'enumorigemcriacao'], { unique: true })
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=UsuarioEntity.js.map