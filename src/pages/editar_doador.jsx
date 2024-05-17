import React from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";
import { FormSearchDoador } from "../components/forms/form_search_doador";
import { FormCadDoador } from "../components/forms/form_cad_doador";
import { DivMainEditDoador } from "../style/divmainpagestyle";

export const EditDoadoorPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivMainEditDoador>
                    <FormSearchDoador />
                    <FormCadDoador />
                </DivMainEditDoador>
            </MainSecondary>
        </MainPrimary>
    )
}