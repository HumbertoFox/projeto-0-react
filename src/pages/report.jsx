import { DivReport, MainReport, SectionCollection } from "../style/reportstyle"

export const ReportPage = () => {
    return (
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
                    <h2>Lista de Fichas Agendadas para Coleta hoje <strong></strong> dia <strong></strong></h2>
                </section>
                <section>
                    <h2>Lista de Fichas Coletadas/não Coletadas dia anterior <strong></strong> dia <strong ></strong></h2>
                </section>
            </DivReport>
        </MainReport>
    )
}