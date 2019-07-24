"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BdError = /** @class */ (function () {
    function BdError(error) {
        this.error = error;
        this.codigoErro = error.code;
        this.detailErro = error.detail;
        this.tableErro = error.table;
        this.columnErro = error.column;
        this.separarChaveValor();
    }
    BdError.prototype.separarChaveValor = function () {
        var naoEncontrou = -1;
        var zero = 0;
        var um = 1;
        var dois = 2;
        if (this.detailErro.indexOf('=') !== naoEncontrou) {
            var temp = this.detailErro.split('=');
            if (temp.length === dois) {
                var slice1 = temp[zero].split(' ');
                var slice2 = temp[um].split(' ');
                this.keyErro = slice1[um];
                this.valueErro = slice2[zero];
            }
        }
    };
    BdError.prototype.getDetails = function () {
        this.montarMensagem();
        var details = {
            codigo: this.codigoErro,
            message: this.messageErro,
        };
        return details;
    };
    return BdError;
}());
exports.BdError = BdError;
//# sourceMappingURL=BdError.js.map