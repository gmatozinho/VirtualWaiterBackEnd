import { BdError } from './BdError';

export class InsertUpdateViolatesFK extends BdError {
    montarMensagem() {
        try {
            const begin = 1;
            const end = this.keyErro.length - 3;
            this.messageErro = 'Não existe o registro de '
                                + this.keyErro.substring(begin, end)
                                + ' para vincular a esse(a) '
                                + this.tableErro;
        } catch {
            this.messageErro = this.detailErro;
        }
    }
}
