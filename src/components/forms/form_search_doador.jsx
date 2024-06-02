import React from "react";
import { useForm } from "react-hook-form";
import { DivBtn } from "../../style/formcaddoadorstyle";
import { FormSearch } from "../../style/formsearchstyle";
import { SubmitButton } from "../button/button_submit";

export const FormSearchDoador = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = e => {
        console.log(e);
    }

    return (
        <FormSearch method="POST" action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="codnametel">Pesquisar Nome/Telefone/Código Doador</label>
            <input
                type="search"
                id="codnametel"
                placeholder={`${errors.codnametel ? "Campo Obrigatório" : ""}`}
                className={`${errors.codnametel ? "required" : ""}`}
                {
                ...register("codnametel", {
                    required: "Required field"
                })}
            />
            <DivBtn>
                <SubmitButton value="Código" />
                <SubmitButton value="Nome" />
                <SubmitButton value="Telefone" />
            </DivBtn>
        </FormSearch>
    )
}