import styled, { css } from "styled-components";

const FormDoador = styled.form`
    max-width: 290px;
    display: flex;
    flex-direction: column;
    transition: .3s ease-in-out;

    label {
        color: grey;
        padding-left: 5px;
    }
    input[type="text"],
    input[type="number"],
    input[type="tel"] {
        width: 290px;
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
        width: 290px;
        height: 70px;
        font-size: 15px;
        border: 1px solid #D2D4DE;
        border-radius: 5px;
        padding: 5px;
        outline: none;
        margin-bottom: 5px;
        transition: .3s ease-in-out;
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
    display: block;

${({ className }) => {
        if (className === "casa" || className === "edificio") {
            return css`
            display: none;
        `;
        };
    }};
`;

const DivNomeEdEmp = styled.div`
    display: block;

${({ className }) => {
        if (className === "casa") {
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