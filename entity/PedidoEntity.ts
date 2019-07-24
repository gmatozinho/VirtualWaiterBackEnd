import { Comanda } from './ComandaEntity';
import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, OneToMany } from 'typeorm';
import { Item } from './ItemEntity';

@Entity()
export class Pedido {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    codigo: string;

    @Column({ nullable: false, type: 'timestamp without time zone' })
    datahora: Timestamp;

    @ManyToOne(() => Comanda, comanda => comanda.pedidos, { nullable: false })
    comanda: Comanda;

    @OneToMany(() => Item, item => item.pedido, {cascade: true, eager: true })
    itens: Item[];

}
