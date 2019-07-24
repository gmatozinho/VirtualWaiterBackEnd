import { Entity, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from './UsuarioEntity';
import { Pessoa } from './PessoaEntity';
import { Estabelecimento } from './EstabelecimentoEntity';

@Entity()
export class Dono extends Pessoa {

    @OneToOne(() => Usuario, { cascade: true, eager: true, nullable: true })
    @JoinColumn()
    usuario: Usuario;

    @OneToOne(() => Estabelecimento, estabelecimento => estabelecimento.dono, {eager: true })
    estabelecimento: Estabelecimento;

}
