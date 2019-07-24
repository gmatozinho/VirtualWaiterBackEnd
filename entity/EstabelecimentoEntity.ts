import { EstabelecimentoPlano } from './EstabelecimentoPlanoEntity';
import { Especialidade } from './EspecialidadeEntity';
import { Funcionario } from './FuncionarioEntity';
import {
    Entity, PrimaryGeneratedColumn,
    Column,
    OneToOne,
    OneToMany,
    JoinColumn,
    ManyToOne,
    Index
} from 'typeorm';
import { Mesa } from './MesaEntity';
import { Endereco } from './EnderecoEntity';
import { Produto } from './ProdutoEntity';
import { Dono } from './DonoEntity';
import { Cardapio } from './CardapioEntity';

@Entity()
export class Estabelecimento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
        type: 'varchar',
    })
    razaosocial: string;

    @Column({
        length: 30,
        nullable: false,
        type: 'varchar',
        unique: true,
    })
    cnpj: string;

    @Index()
    @Column({
        length: 100,
        nullable: false,
        type: 'varchar',
    })
    nome: string;

    @Column({
        length: 255,
        nullable: true,
        type: 'varchar',
    })
    descricao: string;

    @Column({
        length: 255,
        nullable: false,
        type: 'varchar',
    })
    horariofuncionamento: string;

    @Column('varchar', { length: 11, nullable: false })
    telefone: string;

    @Column({
        nullable: true,
        type: 'text',
    })
    logo: string;

    @Column({ nullable: true, type: 'float' })
    avaliacaomedia: number;

    @Column({ nullable: false })
    ativo: boolean;

    @Column({ nullable: false })
    aberto: boolean;

    @OneToMany(() => Funcionario, funcionario => funcionario.estabelecimento)
    funcionarios: Funcionario[];

    @OneToMany(() => Mesa, mesa => mesa.estabelecimento, { eager: false })
    mesas: Mesa[];

    @OneToMany(() => Produto, produto => produto.estabelecimento, { eager: false })
    produtos: Produto[];

    @ManyToOne(() => Especialidade, especialidade => especialidade.estabelecimentos, { eager: true, nullable: false })
    especialidade: Especialidade;

    @OneToOne(() => Endereco, { cascade: true, eager: true, nullable: false })
    @JoinColumn()
    endereco: Endereco;

    @OneToOne(() => Dono, { cascade: true, eager: false, nullable: false })
    @JoinColumn()
    dono: Dono;

    @OneToOne(() => Cardapio, { nullable: false, eager: true, cascade: true })
    @JoinColumn()
    cardapio: Cardapio;

    @OneToMany(type => EstabelecimentoPlano, EstabelecimentoPlanoEntity => EstabelecimentoPlanoEntity.estabelecimento)
    estabelecimentoplano: EstabelecimentoPlano[];

}
