import styled from "styled-components";

const MenuHeader = styled.header`
    width: 250px;
    height: 100vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-self: flex-start;
    border-right: solid 3px #79D1FF;
    background-color: #AAF998;
    transition: .3s ease-in-out;
    overflow-x: hidden;

    nav,
    ul {
        width: 100%;
        background-color: #AAF998;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    a {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #AAF998;
        transition: .3s ease-in-out;
    }
    a:hover {
        background-color: #79D1FF;
    }
    nav img {
        width: 40px;
        margin-right: 20px;
        background: none;
    }
    .active {
        background-color: #79D1FF;;
    }
    span {
        font-size: 18px;
        background: none;
    }
    @media (max-width: 1080px) {
        width: 75px;
        
        span {
            display: none;
        }
    }
`;

const ImgEnterprise = styled.img`
    display: flex;
    width: 190px;
    background: none;
    margin: 0 auto;
    transition: .3s ease-in-out;
    @media (max-height: 620px) {
        width: 135px;
    }
    @media (max-width: 1080px) {
        width: 100%;
    }
`;

export { MenuHeader, ImgEnterprise };