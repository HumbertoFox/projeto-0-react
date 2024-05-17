import React from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";

export const ConfirmColetPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <h1>Confimar Coleta</h1>
            </MainSecondary>
        </MainPrimary>
    )
}