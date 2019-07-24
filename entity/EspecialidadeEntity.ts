import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Estabelecimento } from './EstabelecimentoEntity';

@Entity()
export class Especialidade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
        nullable: false,
        type: 'varchar',
        unique: true,

    })
    descricao: string;

    @OneToMany(() => Estabelecimento, estabelecimento => estabelecimento.especialidade)
    estabelecimentos: Estabelecimento[];

}
