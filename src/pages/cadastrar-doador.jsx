import React from "react";
import { FormCadDoador } from "../components/forms/form_cad_doador";
import { HeaderMenu } from "../components/header/header";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";

export const CadDoadorPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <FormCadDoador />
            </MainSecondary>
        </MainPrimary>
    )
}