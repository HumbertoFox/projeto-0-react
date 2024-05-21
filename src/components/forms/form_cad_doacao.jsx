import React from "react";
import { useForm } from "react-hook-form";
import { DivObj, DivObjPrimary, DivObjsQuant, DivQuant, FormDoacao } from "../../style/formcaddoacaostyle";
import { DivBtn } from "../../style/formcaddoadorstyle";
import { SubmitButton } from "../button/button_submit";

export const FormCadDoacao = (props) => {

    const {
        register,
        handleSubmit,
        setValue,
        setFocus,
        formState: { errors }
    } = useForm();

    const onSubmit = e => {
        console.log(e);
    }

    return (
        <FormDoacao method="POST" action="" onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={props.text}>
                <legend>Lista de objetos a serem doados</legend>
                <DivObj>
                    <label htmlFor="codigodoacao">Código da Doação</label>
                    <input type="text" id="codigodoacao" />
                </DivObj>
                <DivObjPrimary>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto1">objeto 1</label>
                            <input type="text" id="objeto1" {...register("objeto1")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant1">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant1" {...register("quant1")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto2">objeto 2</label>
                            <input type="text" id="objeto2" {...register("objeto2")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant2">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant2" {...register("quant2")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto3">objeto 3</label>
                            <input type="text" id="objeto3" {...register("objeto3")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant3">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant3" {...register("quant3")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto4">objeto 4</label>
                            <input type="text" id="objeto4" {...register("objeto4")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant4">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant4" {...register("quant4")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto5">objeto 5</label>
                            <input type="text" id="objeto5" {...register("objeto5")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant5">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant5" {...register("quant5")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto6">objeto 6</label>
                            <input type="text" id="objeto6" {...register("objeto6")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant6">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant6" {...register("quant6")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto7">objeto 7</label>
                            <input type="text" id="objeto7" {...register("objeto7")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant7">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant7" {...register("quant7")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto8">objeto 8</label>
                            <input type="text" id="objeto8" {...register("objeto8")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant8">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant8" {...register("quant8")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto9">objeto 9</label>
                            <input type="text" id="objeto9" {...register("objeto9")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant9">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant9" {...register("quant9")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto10">objeto 10</label>
                            <input type="text" id="objeto10" {...register("objeto10")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant10">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant10" {...register("quant10")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto11">objeto 11</label>
                            <input type="text" id="objeto11" {...register("objeto11")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant11">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant11" {...register("quant11")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto12">objeto 12</label>
                            <input type="text" id="objeto12" {...register("objeto12")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant12">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant12" {...register("quant12")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto13">objeto 13</label>
                            <input type="text" id="objeto13" {...register("objeto13")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant13">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant13" {...register("quant13")} />
                        </DivQuant>
                    </DivObjsQuant>
                    <DivObjsQuant>
                        <DivObj>
                            <label htmlFor="objeto14">objeto 14</label>
                            <input type="text" id="objeto14" {...register("objeto14")} />
                        </DivObj>
                        <DivQuant>
                            <label htmlFor="quant14">Qantidade/Caixa/Sacola</label>
                            <input type="text" id="quant14" {...register("quant14")} />
                        </DivQuant>
                    </DivObjsQuant>
                </DivObjPrimary>
                <label htmlFor="obs">Observações</label>
                <textarea id="obs" {...register("obs")} ></textarea>
            </fieldset>
            <DivBtn>
                <SubmitButton value="Cadastrar Doação" />
                <SubmitButton value="Cadastrar e agendar" />
            </DivBtn>
        </FormDoacao>
    )
}