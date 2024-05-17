import React from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";

export const AgendColetPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <h1>Agendar Coleta</h1>
            </MainSecondary>
        </MainPrimary>
    )
}