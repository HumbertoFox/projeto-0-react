import styled from "styled-components";

const MainCadDoador = styled.main`
    width: 100%;
    height: 100vh;
    padding-top: 10px;
    padding-left: 255px;
    transition: .3s ease-in-out;
    @media (max-width: 1080px) {
        padding-left: 80px;
    }

    form {
        display: flex;
        flex-direction: column;
    }
`;

export { MainCadDoador };