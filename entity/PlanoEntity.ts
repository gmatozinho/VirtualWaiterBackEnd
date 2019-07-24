import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { EstabelecimentoPlano } from './EstabelecimentoPlanoEntity';

@Entity()
export class Plano {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 100,
        nullable: true,
        type: "varchar",
    })
    public nome: string;

    @Column({
        length: 255,
        nullable: true,
        type: "varchar",
    })
    public descricao: string;

    @Column({ nullable: false, type: "float" })
    public valor: number;

    @Column({ nullable: false, type: "float" })
    public duracao: number;    

    @OneToMany(type => EstabelecimentoPlano, estabelecimentoPlano => estabelecimentoPlano.plano)
    estabelecimentoPlano: EstabelecimentoPlano[];

}
