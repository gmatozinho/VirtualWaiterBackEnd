import { Produto } from './ProdutoEntity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from './PedidoEntity';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    quantidade: number;

    @Column({
        length: 255,
        nullable: true,
        type: 'varchar',
    })
    observacoes: string;

    @Column({ nullable: false, type: "float" })
    public preco: number;

    @Column({ default: false })
    entregue: boolean;

    @ManyToOne(() => Pedido, pedido => pedido.itens, { nullable: false })
    pedido: Pedido;

    @ManyToOne(() => Produto, produto => produto.itens, { nullable: false, eager: true })
    produto: Produto;

}
