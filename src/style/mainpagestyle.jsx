import styled from "styled-components";
const MainPrimary = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    @media (max-width: 480px) {
        width: 375px;
    }
`;
const MainSecondary = styled.div`
    position: relative;
    width: calc(100% - 200px);
    left: 200px;
    min-height: 100vh;
    display: flex;
    column-gap: 10px;
    padding: 5px;
    transition: .3s ease-in-out;
    @media (max-width: 1080px) {
        width: calc(100% - 70px);
        left: 70px;
    }
    @media (max-width: 770px) {
        flex-wrap: wrap;
    }
`;
export { MainPrimary, MainSecondary };