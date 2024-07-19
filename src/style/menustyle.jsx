import styled from "styled-components";

const MenuMain = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const MenuDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    padding: 50px;
    border: solid 1px #79D1FF;
    border-radius: 15px;

    svg {
        color: #AAF998;
        font-size: 70px;
        transition: .4s ease-in-out;
    }
    svg:hover {
        color: #79D1FF;
    }

    @media (max-width: 480px) {
        max-width: 375px;
    }
`;

const MenuFormDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    border: 1px solid #AAF998;
    border-radius: 15px;

    svg {
        font-size: 90px;
        color: #79D1FF;
    }

    @media (max-width: 480px) {
        max-width: 375px;
    }
`;

export { MenuMain, MenuDiv, MenuFormDiv };