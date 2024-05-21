import styled from "styled-components";

const Submit = styled.input.attrs({ type: 'submit' })`
    background-color: #AAF998;
    border-radius: 5px;
    text-shadow: 1px 1px 0.5px #79D1FF;
    padding: 10px;
    cursor: pointer;
    transition: .3s ease-in-out;
    &:hover {
        background-color: #79D1FF;
        text-shadow: 1px 1px 0.5px #AAF998;
    }
`;

export { Submit };