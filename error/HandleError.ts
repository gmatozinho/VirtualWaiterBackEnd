import { NotNullConstraint } from './CustomErrors/NotNullConstraint';
import { DuplicateKeyError } from './CustomErrors/DuplicateKeyError';
import { InsertUpdateViolatesFK } from './CustomErrors/InsertUpdateViolatesFK';
import { codeError } from './errorCode';

export function HandleErr(error: any): any {
    let det;
    let Err;
    switch (error.code) {
        case codeError.DuplicateKey: {
            Err = new DuplicateKeyError(error);
            det = Err.getDetails();
            break;
        }
        case codeError.InsertUpdateViolatesFK: {
            Err = new InsertUpdateViolatesFK(error);
            det = Err.getDetails();
            break;
        }
        case codeError.NotNullConstraint: {
            Err = new NotNullConstraint(error);
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

