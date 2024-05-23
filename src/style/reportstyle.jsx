import styled from "styled-components";

const MainReport = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: .3s ease-in-out;

    h1 {
        font-size: 18px;
    }
    h1,
    h2 {
        color: gray;
        text-shadow: 1px 1px 0.5px #AAF998;
    }
`;

const DivReport = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: 860px) {
        flex-wrap: wrap;
    }
`;

const SectionReport = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export { MainReport, DivReport, SectionReport };