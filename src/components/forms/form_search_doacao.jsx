import React from "react";
import { useForm } from "react-hook-form";
import { DivBtn } from "../../style/formcaddoadorstyle";
import { FormSearch } from "../../style/formsearchstyle";
import { SubmitButton } from "../button/button_submit";

export const FormSearchDoacao = () => {

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
            <label htmlFor="coddonation">Pesquisar por Código da Doação</label>
            <input
                type="search"
                id="coddonation"
                placeholder={`${errors.coddonation ? "Campo Obrigatório" : ""}`}
                className={`${errors.coddonation ? "required" : ""}`}
                {
                ...register("coddonation", {
                    required: "Required field"
                })}
            />
            <DivBtn>
                <SubmitButton value="Pesquisar" />
            </DivBtn>
        </FormSearch>
    )
}