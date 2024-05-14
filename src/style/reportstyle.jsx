import styled from "styled-components";

const MainReport = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-top: 10px;
    padding-left: 255px;
    transition: .3s ease-in-out;
    @media (max-width: 1080px) {
        padding-left: 80px;
    }
`;

const SectionCollection = styled.section`
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: column;

    h1 {
        padding-bottom: 10px;
    }
    h1,
    h2 {
        color: gray;
        text-shadow: 1px 1px 0.5px #AAF998;
    }
    div {
        display: flex;
        height: 100%;
    }
    section {
        width: 100%;
        text-align: center;
    }
    @media (max-width: 800px) {
        div {
            flex-wrap: wrap;
        }
    }
`;

const DivReport = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;

    section {
        width: 100%;
        text-align: center;
    }
    h2 {
        color: gray;
        text-shadow: 1px 1px 0.5px #AAF998;
    }
    @media (max-width: 800px) {
        flex-wrap: wrap;
    }
`;

export { MainReport, SectionCollection, DivReport };