import { HeaderMenu } from "../components/header/header";
import { MainPrimary, MainSecondary } from "../style/mainpagestyle";
import { DivReport, MainReport, SectionReport } from "../style/reportstyle"
const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const dataFull = new Date();
let diaNaSemana = diaDaSemana[dataFull.getDay()];
let diaNoMesDownTwo = dataFull.getDate() - 2;
let diaNoMesDownOne = dataFull.getDate() - 1;
let diaNaSemanaDown = diaDaSemana[dataFull.getDay() - 1];

export const ReportPage = () => {

    function fichaDoSabado() {
        if (diaNaSemana == "Segunda") {
            return "Sábado";
        } else {
            return diaNaSemanaDown;
        };
    };

    function diaDoMesDown() {
        if (diaNaSemana == "Segunda") {
            return diaNoMesDownTwo;
        } else {
            return diaNoMesDownOne;
        };
    };

    return (
        <MainPrimary>
            <HeaderMenu />
            <MainSecondary>
                <MainReport>
                    <h1>Relatório de Coletas</h1>
                    <DivReport>
                        <SectionReport>
                            <h2>Últimas Fichas Coletadas</h2>
                        </SectionReport>
                        <SectionReport>
                            <h2>Últimas Fichas Não Coletadas</h2>
                        </SectionReport>
                    </DivReport>
                    <DivReport>
                        <SectionReport>
                            <h2>Lista de Fichas Agendadas para Coleta hoje <strong>&nbsp;{diaNaSemana}&nbsp;</strong> dia <strong>&nbsp;{dataFull.getDate()}&nbsp;</strong></h2>
                        </SectionReport>
                        <SectionReport>
                            <h2>Lista de Fichas Coletadas/Não Coletadas dia anterior <strong>&nbsp;{fichaDoSabado()}&nbsp;</strong> dia <strong>&nbsp;{diaDoMesDown()}&nbsp;</strong></h2>
                        </SectionReport>
                    </DivReport>
                    <DivReport>
                        <SectionReport>
                            <h2>Últimas Fichas Cadastradas</h2>
                        </SectionReport>
                    </DivReport>
                </MainReport>
            </MainSecondary>
        </MainPrimary >
    )
}