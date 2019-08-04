import { ApiDocs } from './ApiDocs'

import { AvaliacaoRoutes } from './AvaliacaoRoutes';
import { CardapioRoutes } from './CardapioRoutes';
import { ComandaRoutes } from './ComandaRoutes';
import { ConsumidorRoutes } from './ConsumidorRoutes';
import { ContaRoutes } from './ContaRoutes';
import { DonoRoutes } from './DonoRoutes';
import { EnderecoRoutes } from './EnderecoRoutes';
import { EspecialidadeRoutes } from './EspecialidadeRoutes';
import { EstabelecimentoRoutes } from './EstabelecimentoRoutes';
import { EstabelecimentoPlanoRoutes } from './EstabelecimentoPlanoRoutes';
import { FuncionarioRoutes } from './FuncionarioRoutes';
import { ItemRoutes } from './ItemRoutes';
import { MesaRoutes } from './MesaRoutes';
import { PedidoRoutes } from './PedidoRoutes';
import { PlanoRoutes } from './PlanoRoutes';
import { ProdutoRoutes } from './ProdutoRoutes';
import { SecaoRoutes } from './SecaoRoutes';
import { UsuarioRoutes } from './UsuarioRoutes';

import * as ReportRoutes from './ReportRoutes';

/**
 * All application routes.
 */
const allRoutes =
    [
        ReportRoutes.totaldevendasporano,
        ReportRoutes.vendapordianomescorrente,
        ReportRoutes.produtosmaisvendidosentredatas,

    ];

ApiDocs.forEach(element => allRoutes.push(element));

AvaliacaoRoutes.forEach(element => allRoutes.push(element));

CardapioRoutes.forEach(element => allRoutes.push(element));

ComandaRoutes.forEach(element => allRoutes.push(element));

ContaRoutes.forEach(element => allRoutes.push(element));

ConsumidorRoutes.forEach(element => allRoutes.push(element));

DonoRoutes.forEach(element => allRoutes.push(element));

EnderecoRoutes.forEach(element => allRoutes.push(element));

EspecialidadeRoutes.forEach(element => allRoutes.push(element));

EstabelecimentoRoutes.forEach(element => allRoutes.push(element));

EstabelecimentoPlanoRoutes.forEach(element => allRoutes.push(element));

FuncionarioRoutes.forEach(element => allRoutes.push(element));

ItemRoutes.forEach(element => allRoutes.push(element));

MesaRoutes.forEach(element => allRoutes.push(element));

PedidoRoutes.forEach(element => allRoutes.push(element));

PlanoRoutes.forEach(element => allRoutes.push(element));

ProdutoRoutes.forEach(element => allRoutes.push(element));

SecaoRoutes.forEach(element => allRoutes.push(element));

UsuarioRoutes.forEach(element => allRoutes.push(element));

export const AppRoutes = allRoutes;
