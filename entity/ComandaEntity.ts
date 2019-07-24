import { Pedido } from './PedidoEntity';
import { Consumidor } from './ConsumidorEntity';
import { Mesa } from './MesaEntity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Timestamp,
    ManyToMany,
    JoinTable,
    OneToMany,
    ManyToOne
} from 'typeorm';
import { Avaliacao } from './AvaliacaoEntity';
import { Conta } from './ContaEntity';
import { EnumSituacaoComanda } from '../utils/Enum/EnumSituacaoComanda';

@Entity()
export class Comanda  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { nullable: false, default: 1 })
    enumsituacaocomanda: EnumSituacaoComanda;

    @Column({ type: 'timestamp without time zone', nullable: false })
    horarioinicio: Timestamp;

    @Column({ type: 'timestamp without time zone', nullable: true })
    horariofim: Timestamp;

    @ManyToMany(() => Consumidor, { eager: true })
    @JoinTable()
    consumidores: Consumidor[];

    @ManyToOne(() => Mesa, mesa => mesa.comandas, { eager: false })
    mesa: Mesa;

    @OneToMany(() => Pedido, pedido => pedido.comanda, { eager: true })
    pedidos: Pedido[];

    @OneToMany(() => Conta, conta => conta.comanda, { eager: true })
    contas: Conta[];

    @OneToMany(() => Avaliacao, avaliacao => avaliacao.comanda, { eager: true })
    avaliacoes: Avaliacao[];

    @ManyToOne(() => Consumidor,
    consumidor => consumidor.comandasresponsaveis, {eager: true, cascade: true, nullable: false })
    responsavel: Consumidor;

}
