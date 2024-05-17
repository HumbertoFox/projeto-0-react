import React from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";
import { DivMainDoacao } from "../style/divmainpagestyle";
import { FormCadDoador } from "../components/forms/form_cad_doador";
import { FormSearchDoacao } from "../components/forms/form_search_doacao";
import { FormCadDoacao } from "../components/forms/form_cad_doacao";

export const EditDoacaoPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMainDoacao>
                    <FormSearchDoacao />
                    <FormCadDoador text="disabled" />
                </DivMainDoacao>
                <FormCadDoacao />
            </MainSecondary>
        </MainPrimary>
    )
}