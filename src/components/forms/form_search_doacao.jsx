import React from "react";
import { DivBtn } from "../../style/formcaddoadorstyle";
import { FormSearch } from "../../style/formsearchstyle";
import { SubmitButton } from "../button/button_submit";

export const FormSearchDoacao = () => {
    return (
        <FormSearch method="POST" action="">
            <label htmlFor="codnometel">Pesquisar por Código da Doação</label>
            <input type="search" id="codigodoacao" />
            <DivBtn>
                <SubmitButton value="Pesquisar" />
            </DivBtn>
        </FormSearch>
    )
}