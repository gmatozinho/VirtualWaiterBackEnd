import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
@Index('cep_numero', ['cep', 'numero'], { unique: true })
export class Endereco {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
        type: 'varchar',
    })
    bairro: string;

    @Column({
        length: 128,
        nullable: false,
        type: 'varchar'
    })
    cidade: string;

    @Column({
        length: 2,
        nullable: false,
        type: 'varchar',
    })
    uf: string;

    @Column({
        length: 128,
        nullable: false,
        type: 'varchar',
    })
    logradouro: string;

    @Column({
        length: 8,
        nullable: false,
        type: 'varchar',
    })
    cep: string;

    @Column({
        length: 255,
        nullable: true,
        type: 'varchar',
    })
    complemento: string;

    @Column()
    numero: number;

}
