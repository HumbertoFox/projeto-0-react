import { FormCadDoacao } from "../components/forms/form_cad_doacao"
import { FormCadDoador } from "../components/forms/form_cad_doador"
import { FormSearchDoador } from "../components/forms/form_search_doador"
import { HeaderMenu } from "../components/header/header"
import { DivMain } from "../style/caddoacaopagestyle"
import { MainPrimary, MainSecondary } from "../style/mainprimarystyle"

export const CadDoacaoPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMain>
                    <FormSearchDoador />
                    <FormCadDoador text="disabled"/>
                </DivMain>
                <FormCadDoacao />
            </MainSecondary>
        </MainPrimary>
    )
}