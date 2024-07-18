import styled from "styled-components";

const MenuMain = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const MenuDiv = styled.div`
    display: flex;
    gap: 20px;
    padding: 50px;
    border: solid 1px #79D1FF;

    svg {
        color: #AAF998;
        font-size: 50px;
        transition: .4s ease-in-out;
    }
    svg:hover {
        color: #79D1FF;
    }
`;

export { MenuMain, MenuDiv };