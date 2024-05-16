import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { ReportPage } from "./report";
import { CadDoadorPage } from "./cadastrar-doador";
import { CadDoacaoPage } from "./cadastrar-doacao";

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CadDoacaoPage />} />
                <Route path="/" element={<CadDoadorPage />} />
                <Route path="/" element={<ReportPage />} />
            </Routes>
        </BrowserRouter>
    )
}