import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReportPage } from "../pages/report";
import { CadDoadorPage } from "../pages/cadastrar-doador";
import { CadDoacaoPage } from "../pages/cadastrar-doacao";
import { EditDoadoorPage } from "../pages/editar-doador";
import { EditDoacaoPage } from "../pages/editar-doacao";
import { AgendColetPage } from "../pages/agendar-coleta";
import { ConfirmColetPage } from "../pages/confirmar-coleta";
import { AgendCalendarPage } from "../pages/agenda-calendar";
export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Relatorio" element={<ReportPage />} />
                <Route path="/CadastroDoacao" element={<CadDoacaoPage />} />
                <Route path="/CadastroDoador" element={<CadDoadorPage />} />
                <Route path="/EditaDoacao" element={<EditDoacaoPage />} />
                <Route path="/EditaDoador" element={<EditDoadoorPage />} />
                <Route path="/AgendarColeta" element={<AgendColetPage />} />
                <Route path="/ConfirmColeta" element={<ConfirmColetPage />} />
                <Route path="/Agenda" element={<AgendCalendarPage />} />
                <Route path="*" element={<AgendCalendarPage />} />
            </Routes>
        </BrowserRouter>
    );
};