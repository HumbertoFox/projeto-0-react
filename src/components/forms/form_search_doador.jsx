import React from "react";
import { DivBtn } from "../../style/formcaddoadorstyle";
import { FormSearch } from "../../style/formsearchdoadorstyle";
import { SubmitButton } from "../button/button_submit";

export const FormSearchDoador = () => {
    return (
        <FormSearch method="POST" action="">
            <label htmlFor="codnometel">Pesquisar por Nome/Telefone/Código do doador</label>
            <input type="search" name="codnometel" id="codnometel" />
            <DivBtn>
                <SubmitButton value="Código" />
                <SubmitButton value="Nome" />
                <SubmitButton value="Telefone" />
            </DivBtn>
        </FormSearch>
    )
}