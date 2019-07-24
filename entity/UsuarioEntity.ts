import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { EnumOrigemCriacao } from '../utils/Enum/EnumOrigemCriacao';

@Entity()
@Index('email_enumcriacaoorigem', ['email', 'enumorigemcriacao'], { unique: true })
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
        type: 'varchar',
    })
    email: string;

    @Column('varchar', { length: 50, unique: true })
    uid: string;

    @Column('int', { nullable: false })
    enumorigemcriacao: EnumOrigemCriacao;

    @Column({ nullable: false })
    ativo: boolean;

}
