import styled from "styled-components";
const MenuHeader = styled.header`
    width: 200px;
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
        gap: 5px;
    }
    li img {
        width: 30px;
        margin-right: 20px;
        background: none;
    }
    a {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #AAF998;
        transition: .3s ease-in-out;
    }
    li:hover a {
        background-color: #79D1FF;
    }
    .active a {
        background-color: #79D1FF;;
    }
    span {
        font-size: 1rem;
        background: none;
    }
    @media (max-width: 1080px) {
        width: 70px;
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
const LiLogout = styled.li`
    margin-top: 15px;
    svg {
        font-size: 2rem;
        margin-right: 20px;
        background: none;
        rotate: 180deg;
    }
`;
export { MenuHeader, ImgEnterprise, LiLogout };