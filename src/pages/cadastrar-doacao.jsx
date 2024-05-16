import { FormCadDoacao } from "../components/forms/form_cad_doacao"
import { FormCadDoador } from "../components/forms/form_cad_doador"
import { FormSearchDoador } from "../components/forms/form_search_doador"
import { DivMain } from "../style/caddoacaopagestyle"
import { MainPrimary } from "../style/mainprimarystyle"

export const CadDoacaoPage = () => {
    return (
        <MainPrimary>
            <DivMain>
                <FormSearchDoador />
                <FormCadDoador />
            </DivMain>
            <FormCadDoacao />
        </MainPrimary>
    )
}