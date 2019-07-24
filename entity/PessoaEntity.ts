import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { EnumOrgaoEmissor } from '../utils/Enum/EnumOrgaoEmissor';

export class Pessoa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
        type: 'varchar',
    })
    nome: string;

    @Column({
        length: 100,
        nullable: true,
        type: 'varchar',
    })
    sobrenome: string;

    @Column('date', { nullable: true })
    datanascimento: Date;

    @Column({
        length: 11,
        nullable: true,
        type: 'varchar',
        unique: true,
    })
    cpf: string;

    @Column({
        length: 20,
        nullable: true,
        type: 'varchar',
    })
    rg: string;

    @Column('int', { nullable: true })
    enumorgaoemissor: EnumOrgaoEmissor;

    @Column('varchar', { length: 20, nullable: true, unique: true })
    celular: string;


}
