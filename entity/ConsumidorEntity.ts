import { Avaliacao } from './AvaliacaoEntity';
import { Usuario } from './UsuarioEntity';
import { Entity, OneToOne, JoinColumn, OneToMany, PrimaryGeneratedColumn, Column } from "typeorm";
import { Comanda } from './ComandaEntity';

@Entity()
export class Consumidor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
        type: 'varchar',
    })
    nome: string;

    @Column('date', { nullable: true })
    datanascimento: Date;

    @Column('varchar', { length: 20, nullable: false, unique: true })
    celular: string;

    @OneToOne(() => Usuario, { cascade: true, eager: true, nullable: true })
    @JoinColumn()
    usuario: Usuario;

    @OneToMany(() => Avaliacao, avaliacao => avaliacao.consumidor, { eager: true })
    avaliacoes: Avaliacao[];

    @OneToMany(() => Comanda, comanda => comanda.responsavel)
    comandasresponsaveis: Comanda[];

}
