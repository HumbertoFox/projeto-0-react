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
    display: flex;
    .rbc-calendar {
        width: 100%;
    }
`;
export { DivMainDoacao, DivMainEditDoador, DivAgenda };