import styled from "styled-components";
const DivMainDoacao = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    form:last-child div:last-child {
        display: none;
    }
`;
const DivMainEditDoador = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`;
const DivAgenda = styled.div`
    width: 100%;
    .rbc-event-content {
        text-align: center;
    }
`;
const DivToolbarCalendar = styled.div`
    .rbc-toolbar-label h2 {
        font-size: 1.4rem;
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
`;
export { DivMainDoacao, DivMainEditDoador, DivAgenda, DivToolbarCalendar };