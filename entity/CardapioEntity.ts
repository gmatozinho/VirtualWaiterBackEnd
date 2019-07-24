import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { Secao } from './SecaoEntity';

@Entity()
export class Cardapio  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
        nullable: false,
        type: 'varchar',
    })
    descricao: string;

    @OneToMany(() => Secao, secao => secao.cardapio, { cascade: true , eager: true })
    secoes: Secao[];

    @Column({ nullable: false })
    ativo: boolean;

}
