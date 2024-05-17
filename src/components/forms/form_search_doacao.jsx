import React from "react";
import { DivBtn } from "../../style/formcaddoadorstyle";
import { FormSearchDoa } from "../../style/formsearchdoadorstyle";

export const FormSearchDoacao = () => {
    return (
        <FormSearchDoa method="POST" action="">
            <label htmlFor="codnometel">Pesquisar por Código da Doação</label>
            <input type="search" name="codigodoacao" id="codigodoacao" />
            <DivBtn>
                <input type="submit" name="pesq_codigo" value={"Pesquisar"} />
            </DivBtn>
        </FormSearchDoa>
    )
}