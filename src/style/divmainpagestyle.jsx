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

export { DivMainDoacao, DivMainEditDoador };