"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotNullConstraint_1 = require("./CustomErrors/NotNullConstraint");
var DuplicateKeyError_1 = require("./CustomErrors/DuplicateKeyError");
var InsertUpdateViolatesFK_1 = require("./CustomErrors/InsertUpdateViolatesFK");
var errorCode_1 = require("./errorCode");
function HandleErr(error) {
    var det;
    var Err;
    switch (error.code) {
        case errorCode_1.codeError.DuplicateKey: {
            Err = new DuplicateKeyError_1.DuplicateKeyError(error);
            det = Err.getDetails();
            break;
        }
        case errorCode_1.codeError.InsertUpdateViolatesFK: {
            Err = new InsertUpdateViolatesFK_1.InsertUpdateViolatesFK(error);
            det = Err.getDetails();
            break;
        }
        case errorCode_1.codeError.NotNullConstraint: {
            Err = new NotNullConstraint_1.NotNullConstraint(error);
            det = Err.getDetails();
            break;
        }
        default: {
            det = {
                codigo: '0',
                message: 'Ocorreu um erro interno. Contate o adminstrador do sistema.'
            };
            break;
        }
    }
    return det;
}
exports.HandleErr = HandleErr;
//# sourceMappingURL=HandleError.js.map