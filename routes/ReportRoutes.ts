import * as ReportApplication from "../application/ReportApplication";

/**
 * Inicio das Rotas dos Relatórios
 */
const totaldevendasporano = {
    action: ReportApplication.report_totaldevendasporano,
    method: "get",
    path: "/api/report/totaldevendasporano",
}

const vendapordianomescorrente = {
    action: ReportApplication.report_vendapordianomescorrente,
    method: "get",
    path: "/api/report/vendapordianomescorrente",
}

const produtosmaisvendidosentredatas = {
    action: ReportApplication.report_produtosmaisvendidosentredatas,
    method: "get",
    path: "/api/report/produtosmaisvendidosentredatas",
}


/**
 * Fim das Rotas dos Relatórios
 */

export {
    totaldevendasporano,
    vendapordianomescorrente,
    produtosmaisvendidosentredatas,
}

