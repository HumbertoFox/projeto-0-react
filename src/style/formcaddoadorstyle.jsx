import styled, { css } from "styled-components";
import ImgAlert from "../assets/ponto-de-exclamacao.png";
const FormDoador = styled.form`
    width: 280px;
    display: flex;
    flex-direction: column;
    transition: .3s ease-in-out;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    fieldset {
        display: flex;
        flex-direction: column;
    }
    label {
        color: grey;
        padding-left: 5px;
    }
    input[type="text"],
    input[type="number"],
    input[type="tel"],
    textarea {
        height: 30px;
        font-size: 15px;
        border: 1px solid #D2D4DE;
        border-radius: 5px;
        padding: 0 5px;
        outline: none;
        margin-bottom: 5px;
        transition: .3s ease-in-out;
    }
    input[type=text]:focus,
    input[type="number"]:focus,
    input[type="tel"]:focus,
    textarea:focus {
        border: 1px solid hsla(205.46, 86.5%, 46.47%, .5);
        box-shadow: 0 0 5px hsla(205.46, 86.5%, 46.47%, .5);
    }
    textarea {
        height: 70px;
        padding: 5px;
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
const DivRadio = styled.div`
    display: flex;
    padding: 10px 0;
    justify-content: center;
    
    input[type="radio"],
    label {
        cursor: pointer;
        transition: .3s ease-in-out;
    }
    label {
        padding-right: 15px;
    }
    label:hover,
    label:hover input[type="radio"] {
        color: hsla(205.46, 86.5%, 46.47%, .5);
    }
`;
const DivCnpj = styled.div`
    display: flex;
    flex-direction: column;
${({ className }) => {
        if (className === "house" || className === "building") {
            return css`
            display: none;
        `;
        };
    }};
`;
const DivNomeEdEmp = styled.div`
    display: flex;
    flex-direction: column;
${({ className }) => {
        if (className === "house") {
            return css`
            display: none;
        `;
        };
    }};
`;
const DivBtn = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
export { FormDoador, DivRadio, DivCnpj, DivNomeEdEmp, DivBtn };