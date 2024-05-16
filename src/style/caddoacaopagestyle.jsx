import styled from "styled-components";

const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    form:last-child div:last-child {
        display: none;
    }
`;

export { DivMain };