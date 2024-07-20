import styled, { css } from "styled-components";
import ImgAlert from "../assets/ponto-de-exclamacao.png";

const FormDonation = styled.form`
    max-width: 790px;
    display: flex;
    flex-direction: column;
    transition: .3s ease-in-out;
    
    label {
        color: grey;
        padding-left: 5px;
    }
    input[type="text"] {
        max-width: 280px;
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
    textarea:focus {
        border: 1px solid hsla(205.46, 86.5%, 46.47%, .5);
        box-shadow: 0 0 5px hsla(205.46, 86.5%, 46.47%, .5);
    }
    textarea {
        width: 780px;
        height: 70px;
        font-size: 15px;
        border: 1px solid #D2D4DE;
        border-radius: 5px;
        padding: 5px;
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
    
    @media (max-width: 1340px) {
        max-width: 390px;

        textarea {
            width: 385px;
        }
    }
    @media (max-width: 480px) {
        width: 280px;

        textarea {
            width: 280px;
        }
    }
`;

const DivObjPrimary = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    transition: .3s ease-in-out;
`;

const DivObjsQuant = styled.div`
    display: flex;
    gap: 5px;
    transition: .3s ease-in-out;

    @media (max-width: 480px) {
        flex-wrap: wrap;
        gap: 0;
    }
`;

const DivObj = styled.div`
    display: flex;
    flex-direction: column;
    transition: .3s ease-in-out;

    input[type="text"] {
        width: 230px;
    }
    @media (max-width: 480px) {
        width: 100%;

        input[type="text"] {
            width: 280px;
        }
    }

    ${({ $codDonation }) => {
        if ($codDonation) {
            return css`
                display: none;
            `;
        }
    }}
`;

const DivQuant = styled.div`
    display: flex;
    flex-direction: column;
    transition: .3s ease-in-out;
    
    input[type="text"] {
        width: 150px;
        transition: .3s ease-in-out;
    }
    @media (max-width: 480px) {
        width: 100%;
        
        input[type="text"] {
            width: 100%;
        }
    }
`;

const DivCods = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`;

export { FormDonation, DivObjPrimary, DivObjsQuant, DivObj, DivQuant, DivCods };