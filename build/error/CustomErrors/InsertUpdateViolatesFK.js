"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BdError_1 = require("./BdError");
var InsertUpdateViolatesFK = /** @class */ (function (_super) {
    tslib_1.__extends(InsertUpdateViolatesFK, _super);
    function InsertUpdateViolatesFK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsertUpdateViolatesFK.prototype.montarMensagem = function () {
        try {
            var begin = 1;
            var end = this.keyErro.length - 3;
            this.messageErro = 'Não existe o registro de '
                + this.keyErro.substring(begin, end)
                + ' para vincular a esse(a) '
                + this.tableErro;
        }
        catch (_a) {
            this.messageErro = this.detailErro;
        }
    };
    return InsertUpdateViolatesFK;
}(BdError_1.BdError));
exports.InsertUpdateViolatesFK = InsertUpdateViolatesFK;
//# sourceMappingURL=InsertUpdateViolatesFK.js.map