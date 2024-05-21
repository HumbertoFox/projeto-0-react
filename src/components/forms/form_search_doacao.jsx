import React from "react";
import { DivBtn } from "../../style/formcaddoadorstyle";
import { FormSearchDoa } from "../../style/formsearchdoadorstyle";
import { SubmitButton } from "../button/button_submit";

export const FormSearchDoacao = () => {
    return (
        <FormSearchDoa method="POST" action="">
            <label htmlFor="codnometel">Pesquisar por Código da Doação</label>
            <input type="search" name="codigodoacao" id="codigodoacao" />
            <DivBtn>
                <SubmitButton value="Pesquisar" />
            </DivBtn>
        </FormSearchDoa>
    )
}