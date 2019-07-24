import { BdError } from './BdError';

export class DuplicateKeyError extends BdError {

    montarMensagem() {
        try {
            if (this.keyErro.endsWith('Id")')) {
                const begin = 2;
                const difOperation = 4;
                const end = this.keyErro.length - difOperation;
                this.messageErro = 'Já existe um(a) '
                                    + this.tableErro
                                    + ' vinculado a esse(a) '
                                    + this.keyErro.substring(begin, end);
            } else {
                this.messageErro = 'O registro para '
                                    + this.keyErro
                                    + ':'
                                    + this.valueErro
                                    + ' já existe';
            }
        } catch {
            this.messageErro = this.detailErro;
        }
    }
}
