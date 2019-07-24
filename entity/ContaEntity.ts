import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Comanda } from './ComandaEntity';
import { EnumFormaPagamento } from '../utils/Enum/EnumFormaPagamento';

@Entity()
export class Conta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: "float" })
    public total: number;

    @Column({ nullable: false, type: "float" })
    public taxaservico: number;

    @Column('int', { nullable: false })
    enumformapagamento: EnumFormaPagamento;

    @ManyToOne(() => Comanda, comanda => comanda.contas, { nullable: false })
    comanda: Comanda;

}
