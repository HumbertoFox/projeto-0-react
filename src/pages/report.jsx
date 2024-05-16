import { HeaderMenu } from "../components/header/header";
import { MainPrimary } from "../style/mainprimarystyle";
import { DivReport, MainReport, SectionCollection } from "../style/reportstyle"
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
            <MainReport>
                <SectionCollection>
                    <h1>Relatório de Coleta</h1>
                    <div>
                        <section>
                            <h2>Última Semana</h2>
                        </section>
                        <section>
                            <h2>Último Mês</h2>
                        </section>
                    </div>
                </SectionCollection>
                <DivReport>
                    <section>
                        <h2>Lista de Fichas Agendadas para Coleta hoje <strong>{diaNaSemana}</strong> dia <strong>{dataFull.getDate()}</strong></h2>
                    </section>
                    <section>
                        <h2>Lista de Fichas Coletadas/não Coletadas dia anterior <strong>{fichaDoSabado()}</strong> dia <strong >{diaDoMesDown()}</strong></h2>
                    </section>
                </DivReport>
            </MainReport>
        </MainPrimary >
    )
}