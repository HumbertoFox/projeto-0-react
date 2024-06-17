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
    }
    li {
        transition: .4s ease-in-out;
    }
    li:hover a {
        color: #FFF;
    }
    a {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #AAF998;
        transition: .4s ease-in-out;
    }
    a svg {
        width: 30px;
        font-size: 2rem;
        margin-right: 15px;
        background: none;
    }
    .active {
        background-color: #79D1FF;
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
    width: 150px;
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
const LiSvgRotation = styled.li`
    svg {
        transform: rotateY(180deg);
    }
`;
const LiLogout = styled(LiSvgRotation)`
    margin-top: 10px;
`;
export { MenuHeader, ImgEnterprise, LiSvgRotation, LiLogout };