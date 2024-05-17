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

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReportPage />} />
                <Route path="/cadastrar-doacao" element={<CadDoacaoPage />} />
                <Route path="/cadastrar-doador" element={<CadDoadorPage />} />
                <Route path="/editar-doacao" element={<EditDoacaoPage />} />
                <Route path="/editar-doador" element={<EditDoadoorPage />} />
                <Route path="*" element={<ReportPage />} />
            </Routes>
        </BrowserRouter>
    )
}