import React from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";
import { AgendaCalendar } from "../components/agenda/agenda";
import { DivAgenda } from "../style/divmainpagestyle";
export const AgendCalendarPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <DivAgenda>
                    <AgendaCalendar />
                </DivAgenda>
            </MainSecondary>
        </MainPrimary>
    );
};