import { BdError } from './BdError';

export class NotNullConstraint extends BdError {
    montarMensagem() {
        try {
            this.messageErro = 'O valor da coluna '
                                + this.columnErro
                                + ' na tabela '
                                + this.tableErro
                                + ' não pode ser nulo';
        } catch {
            this.messageErro = this.detailErro;
        }
    }
}
