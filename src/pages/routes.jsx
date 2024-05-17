import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { ReportPage } from "./report";
import { CadDoadorPage } from "./cadastrar-doador";
import { CadDoacaoPage } from "./cadastrar-doacao";
import { EditDoadoorPage } from "./editar-doador";
import { EditDoacaoPage } from "./editar-doacao";
import { AgendColetPage } from "./agendar-coleta";
import { ConfirmColetPage } from "./confirmar-coleta";

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReportPage />} />
                <Route path="/CadastroDoacao" element={<CadDoacaoPage />} />
                <Route path="/CadastroDoador" element={<CadDoadorPage />} />
                <Route path="/EditaDoacao" element={<EditDoacaoPage />} />
                <Route path="/EditaDoador" element={<EditDoadoorPage />} />
                <Route path="/AgendaColeta" element={<AgendColetPage />} />
                <Route path="/ConfirmColeta" element={<ConfirmColetPage />} />
                <Route path="*" element={<ReportPage />} />
            </Routes>
        </BrowserRouter>
    )
}