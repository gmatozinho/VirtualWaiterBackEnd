import * as ReportService from '../service/ReportService';
import { Request, Response } from "express";

export var report_totaldevendasporano = async (request: Request, response: Response) => {
    await ReportService.report_TotaldeVendasPorAno(request, response);
}

export var report_vendapordianomescorrente = async (request: Request, response: Response) => {
    await ReportService.report_VendaPorDiaNoMesCorrente(request, response);
}

export var report_produtosmaisvendidosentredatas = async (request: Request, response: Response) => {
    await ReportService.report_ProdutosMaisVendidosEntreDatas(request, response);
    
}

