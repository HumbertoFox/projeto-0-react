import styled from "styled-components";

const MainPrimary = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    transition: .3s ease-in-out;
`;

const MainSecondary = styled.div`
    position: relative;
    width: calc(100% - 250px);
    left: 250px;
    min-height: 100vh;
    display: flex;
    column-gap: 10px;
    padding: 5px;
    transition: .3s ease-in-out;
    @media (max-width: 1080px) {
        width: calc(100% - 75px);
        left: 75px;
    }
    @media (max-width: 770px) {
        flex-wrap: wrap;
    }
    @media (max-width: 480px) {
        width: 375px;
    }

`;

export { MainPrimary, MainSecondary };