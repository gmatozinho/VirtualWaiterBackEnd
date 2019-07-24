import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Usuario } from './UsuarioEntity';
import { Estabelecimento } from './EstabelecimentoEntity';
import { Pessoa } from './PessoaEntity';
import { EnumTipoFuncionario } from '../utils/Enum/EnumTipoFuncionario';

@Entity()
export class Funcionario extends Pessoa {

    @Column('int', { nullable: false })
    enumtipofuncionario: EnumTipoFuncionario;

    @OneToOne(() => Usuario, { cascade: true, eager: true, nullable: true })
    @JoinColumn()
    usuario: Usuario;

    @ManyToOne(() => Estabelecimento,
                    estabelecimento => estabelecimento.funcionarios,
                    { nullable: false, eager: true })
    estabelecimento: Estabelecimento;

    @Column({ nullable: false})
    ativo: boolean;

}
