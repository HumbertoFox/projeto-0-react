import styled from "styled-components";

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

const DivBtn = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    input[type="submit"] {
        width: 130px;
        height: 30px;
        display: flex;
        justify-content: center;
        background-color: #AAF998;
        border-radius: 5px;
        text-shadow: 1px 1px 0.5px #79D1FF;
        cursor: pointer;
        transition: .3s ease-in-out;
    }
    input[type="submit"]:hover {
        background-color: #79D1FF;
        text-shadow: 1px 1px 0.5px #AAF998;
    }
`;

export { FormDoador, DivRadio, DivBtn };