import styled from "styled-components";
import ImgAlert from "../assets/ponto-de-exclamacao.png";

const FormSearch = styled.form`
    max-width: 290px;
    display: flex;
    flex-direction: column;

    label {
        color: grey;
        padding-left: 5px;
    }
    input[type="search"] {
        height: 30px;
        font-size: 15px;
        border: 1px solid #D2D4DE;
        border-radius: 5px;
        padding: 0 5px;
        outline: none;
        margin-bottom: 5px;
        transition: .3s ease-in-out;
    }
    input[type=search]:focus {
        border: 1px solid hsla(205.46, 86.5%, 46.47%, .5);
        box-shadow: 0 0 5px hsla(205.46, 86.5%, 46.47%, .5);
    }
    input.required:focus {
        border: 1px solid hsla(332.47, 100%, 50%, .5);
        box-shadow: 0 0 5px hsla(332.47, 100%, 50%, .5);
    }
    input.required {
        border: 1px solid hsla(332.47, 100%, 50%, .5);
        background: url(${ImgAlert}) right 2% bottom 50% no-repeat;
        background-size: 20px;
    }
    .required::placeholder {
        font-style: italic;
        color: hsla(332.47, 100%, 50%, .5);
    }
`;

export { FormSearch };