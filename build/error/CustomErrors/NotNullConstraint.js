"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BdError_1 = require("./BdError");
var NotNullConstraint = /** @class */ (function (_super) {
    tslib_1.__extends(NotNullConstraint, _super);
    function NotNullConstraint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotNullConstraint.prototype.montarMensagem = function () {
        try {
            this.messageErro = 'O valor da coluna '
                + this.columnErro
                + ' na tabela '
                + this.tableErro
                + ' não pode ser nulo';
        }
        catch (_a) {
            this.messageErro = this.detailErro;
        }
    };
    return NotNullConstraint;
}(BdError_1.BdError));
exports.NotNullConstraint = NotNullConstraint;
//# sourceMappingURL=NotNullConstraint.js.map