export abstract class BdError {
    codigoErro: number;
    detailErro: string;
    tableErro: string;
    columnErro: string;
    keyErro: string;
    valueErro: string;
    messageErro: string;

    constructor(public error: any) {
        this.codigoErro = error.code;
        this.detailErro = error.detail;
        this.tableErro = error.table;
        this.columnErro = error.column;
        this.separarChaveValor();
    }

    separarChaveValor() {
        const naoEncontrou = -1;
        const zero = 0;
        const um = 1;
        const dois = 2;
        if (this.detailErro.indexOf('=') !== naoEncontrou) {
            const temp = this.detailErro.split('=');
            if (temp.length === dois) {
                const slice1 = temp[zero].split(' ');
                const slice2 = temp[um].split(' ');
                this.keyErro = slice1[um];
                this.valueErro = slice2[zero];
            }
        }
    }

    getDetails() {
        this.montarMensagem();
        const details = {
            codigo: this.codigoErro,
            message: this.messageErro,
        };
        return details;
    }

    abstract montarMensagem();
}
