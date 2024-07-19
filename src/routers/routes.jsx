import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReportPage } from "../pages/report";
import { CadDonorPage } from "../pages/cadastrar-donor";
import { CadDonationPage } from "../pages/cadastrar-donation";
import { EditDonorPage } from "../pages/editar-donor";
import { EditDonationPage } from "../pages/editar-donation";
import { AgendCollectionPage } from "../pages/agendar-collection";
import { ConfirmCollectionPage } from "../pages/confirm-collection";
import { AgendCalendarPage } from "../pages/agenda-calendar";
import { MenuPage } from "../pages/menu";
import { CadDriverPage } from "../pages/cadastrar-driver";
import { CadHelperPage } from "../pages/cadastrar-helper";
export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Relatorio" element={<ReportPage />} />
                <Route path="/CadastroDoacao" element={<CadDonationPage />} />
                <Route path="/CadastroDoador" element={<CadDonorPage />} />
                <Route path="/EditaDoacao" element={<EditDonationPage />} />
                <Route path="/EditaDoador" element={<EditDonorPage />} />
                <Route path="/AgendarColeta" element={<AgendCollectionPage />} />
                <Route path="/ConfirmColeta" element={<ConfirmCollectionPage />} />
                <Route path="/Agenda" element={<AgendCalendarPage />} />
                <Route path="/Menu" element={<MenuPage />} />
                <Route path="/CadastroMotorista" element={<CadDriverPage />} />
                <Route path="/CadastrarAjudante" element={<CadHelperPage />} />
                <Route path="*" element={<AgendCalendarPage />} />
            </Routes>
        </BrowserRouter>
    );
};