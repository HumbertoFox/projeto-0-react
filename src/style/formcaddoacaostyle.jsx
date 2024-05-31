import styled from "styled-components";

const FormDoacao = styled.form`
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
    
    @media (max-width: 1340px) {
        max-width: 390px;

        textarea {
            width: 385px;
        }
    }
    @media (max-width: 480px) {
        width: 100%;

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
            width: 290px;
        }
    }
`;

const DivQuant = styled.div`
    display: flex;
    flex-direction: column;
    transition: .3s ease-in-out;
    
    input[type="text"] {
        width: 150px;
    }
    @media (max-width: 480px) {
        width: 100%;
        
        input[type="text"] {
            width: 100%;
        }
    }
`;

export { FormDoacao, DivObjPrimary, DivObjsQuant, DivObj, DivQuant };