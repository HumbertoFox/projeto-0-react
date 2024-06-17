import React from "react";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { HeaderMenu } from "../components/header/header";
import { AgendaCalendar } from "../components/agenda/agenda";
export const AgendCalendarPage = () => {
    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <AgendaCalendar />
            </MainSecondary>
        </MainPrimary>
    );
};