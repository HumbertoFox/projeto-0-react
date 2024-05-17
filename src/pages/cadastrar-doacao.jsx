import React from "react"
import { FormCadDoacao } from "../components/forms/form_cad_doacao"
import { FormCadDoador } from "../components/forms/form_cad_doador"
import { FormSearchDoador } from "../components/forms/form_search_doador"
import { HeaderMenu } from "../components/header/header"
import { DivMainDoacao } from "../style/divmainpagestyle"
import { MainPrimary, MainSecondary } from "../style/mainpagestyle"

export const CadDoacaoPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMainDoacao>
                    <FormSearchDoador />
                    <FormCadDoador text="disabled" />
                </DivMainDoacao>
                <FormCadDoacao />
            </MainSecondary>
        </MainPrimary>
    )
}