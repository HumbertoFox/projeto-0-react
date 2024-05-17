import React from "react";
import { DivBtn } from "../../style/formcaddoadorstyle";
import { FormSearch } from "../../style/formsearchdoadorstyle";

export const FormSearchDoador = () => {
    return (
        <FormSearch method="POST" action="">
            <label htmlFor="codnometel">Pesquisar por Nome/Telefone/Código do doador</label>
            <input type="search" name="codnometel" id="codnometel" />
            <DivBtn>
                <input type="submit" name="pesq_codigo" value={"Código"} />
                <input type="submit" name="pesq_nome" value={"Nome"} />
                <input type="submit" name="pesq_telefone" value={"Telefone"} />
            </DivBtn>
        </FormSearch>
    )
}