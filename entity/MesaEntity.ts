import { Comanda } from './ComandaEntity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Estabelecimento } from './EstabelecimentoEntity';
import { EnumEstadoMesa } from '../utils/Enum/EnumEstadoMesa';

@Entity()
export class Mesa  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    numero: number;

    @Column({ nullable: false, unique: true })
    codigo: string;

    @Column('int')
    enumestadomesa: EnumEstadoMesa;

    @ManyToOne(() => Estabelecimento, estabelecimento => estabelecimento.mesas, { nullable: false })
    estabelecimento: Estabelecimento;

    @OneToMany(() => Comanda, comanda => comanda.mesa, { eager: true })
    comandas: Comanda[];

    @Column({ nullable: false })
    ativo: boolean;
}
