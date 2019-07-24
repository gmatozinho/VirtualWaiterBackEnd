"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BdError_1 = require("./BdError");
var DuplicateKeyError = /** @class */ (function (_super) {
    tslib_1.__extends(DuplicateKeyError, _super);
    function DuplicateKeyError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuplicateKeyError.prototype.montarMensagem = function () {
        try {
            if (this.keyErro.endsWith('Id")')) {
                var begin = 2;
                var difOperation = 4;
                var end = this.keyErro.length - difOperation;
                this.messageErro = 'Já existe um(a) '
                    + this.tableErro
                    + ' vinculado a esse(a) '
                    + this.keyErro.substring(begin, end);
            }
            else {
                this.messageErro = 'O registro para '
                    + this.keyErro
                    + ':'
                    + this.valueErro
                    + ' já existe';
            }
        }
        catch (_a) {
            this.messageErro = this.detailErro;
        }
    };
    return DuplicateKeyError;
}(BdError_1.BdError));
exports.DuplicateKeyError = DuplicateKeyError;
//# sourceMappingURL=DuplicateKeyError.js.map