import styled from "styled-components";

const MainPrimary = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 10px 0;
    padding-left: 255px;
    transition: .3s ease-in-out;
    @media (max-width: 1080px) {
        padding-left: 80px;
    }
    @media (max-width: 480px) {
        max-width: 375px;
    }
`;

export { MainPrimary };