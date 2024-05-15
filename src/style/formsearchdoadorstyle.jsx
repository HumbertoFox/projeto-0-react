import styled from "styled-components";

const FormSearch = styled.form`
    max-width: 290px;
    display: flex;
    flex-direction: column;

    label {
        color: grey;
        padding-left: 5px;
    }

    input[type="search"] {
        width: 290px;
        height: 30px;
        font-size: 15px;
        border: 1px solid #D2D4DE;
        border-radius: 5px;
        padding: 0 5px;
        outline: none;
        margin-bottom: 5px;
    }
    input[type=search]:focus {
        border: 1px solid hsla(205.46, 86.5%, 46.47%, .5);
        box-shadow: 0 0 5px hsla(205.46, 86.5%, 46.47%, .5);
    }

    div {
        display: flex;
        input[type="submit"] {
            width: 60px;
        }
    }
`;

export { FormSearch };