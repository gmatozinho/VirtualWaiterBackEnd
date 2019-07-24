import { Entity, Column, ManyToOne, Timestamp, PrimaryColumn, JoinColumn,  } from "typeorm";
import { Estabelecimento } from './EstabelecimentoEntity';
import { Plano } from './PlanoEntity';

@Entity()
export class EstabelecimentoPlano {

    @PrimaryColumn()
    estabelecimentoid: number;

    @PrimaryColumn()
    planoid: number;
    
    @ManyToOne(type => Estabelecimento, estabelecimento => estabelecimento.estabelecimentoplano, {
        cascade: true })
    @JoinColumn({name: 'estabelecimentoid'})
    estabelecimento: Estabelecimento;

    @ManyToOne(type => Plano, plano => plano.estabelecimentoPlano, {
        cascade: true })
    @JoinColumn({name: 'planoid'})
    plano: Plano;

    @Column({ type: "timestamp without time zone", nullable: true })
    public datainicio: Timestamp;

    @Column({ type: "timestamp without time zone", nullable: true })
    public datafim: Timestamp;
    
}
