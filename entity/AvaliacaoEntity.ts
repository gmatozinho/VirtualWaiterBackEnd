import { Comanda } from './ComandaEntity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Consumidor } from './ConsumidorEntity';

@Entity()
export class Avaliacao {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: "float" })
    public nota: number;

    @Column('varchar', { length: 255, nullable: true })
    comentario: string;

    @ManyToOne(() => Consumidor, consumidor => consumidor.avaliacoes, { nullable: false })
    consumidor: Consumidor;

    @ManyToOne(() => Comanda, comanda => comanda.avaliacoes, { nullable: false })
    comanda: Comanda;
}
