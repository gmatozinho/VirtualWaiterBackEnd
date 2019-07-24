import { Entity, PrimaryGeneratedColumn, Column, Double, ManyToOne, OneToMany } from 'typeorm';
import { Item } from './ItemEntity';
import { Estabelecimento } from './EstabelecimentoEntity';
import { Secao } from './SecaoEntity';

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
        type: 'varchar'
    })
    nome: string;

    @Column({
        length: 255,
        nullable: true,
        type: 'varchar'
    })
    descricao: string;

    @Column({ nullable: false, type: "float" })
    public preco: number;

    @Column({
        nullable: true,
        type: 'text'
    })
    foto: string;

    @Column({ nullable: false })
    empromocao: boolean;

    @Column({ nullable: true, precision: 2, type: 'decimal' })
    descontopromocional: Double;

    @Column({ nullable: false })
    ativo: boolean;

    @Column({ nullable: false })
    tempopreparo: number;

    @OneToMany(() => Item, item => item.produto, { eager: false })
    itens: Item[];

    @ManyToOne(() => Estabelecimento, estabelecimento => estabelecimento.produtos, { nullable: false })
    estabelecimento: Estabelecimento;

    @ManyToOne(() => Secao, secao => secao.produtos, { nullable: false })
    secao: Secao;

}
