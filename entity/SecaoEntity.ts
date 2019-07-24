import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToOne } from 'typeorm';
import { Produto } from './ProdutoEntity';
import { Cardapio } from './CardapioEntity';

@Entity()
export class Secao {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
        nullable: false,
        type: 'varchar',
    })
    descricao: string;

    @OneToMany(() => Produto, produto => produto.secao, { eager: true })
    produtos: Produto[];

    @ManyToOne(() => Cardapio, cardapio => cardapio.secoes)
    cardapio: Cardapio;

    @Column({ nullable: false })
    ativo: boolean;

}
