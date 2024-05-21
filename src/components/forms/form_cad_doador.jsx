import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DivBtn, DivCnpj, DivNomeEdEmp, DivRadio, FormDoador } from "../../style/formcaddoadorstyle";
import { SubmitButton } from "../button/button_submit";

export const FormCadDoador = (props) => {

    const [radioSelect, setRadioSelect] = useState("");

    const trocarRadioSelect = e => {
        setRadioSelect(e.target.value);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <FormDoador method="POST" action="">
            <fieldset disabled={props.text}>
                <label htmlFor="codigodoador">Código do Doador</label>
                <input type="text" id="codigodoador" disabled={true} />
                <label htmlFor="nome">Nome do Doador</label>
                <input type="text" id="nome" />
                <label htmlFor="contato1">Número Móvel do Responsável</label>
                <input type="tel" id="contato1" />
                <label htmlFor="contato2">Número Móvel do Responsável/Opcional</label>
                <input type="tel" id="contato2" />
                <label htmlFor="contato3">Número Fixo do Contato/Opcional ou Ramal</label>
                <input type="tel" id="contato3" />
                <label htmlFor="cep">Cep</label>
                <input type="number" id="cep" />
                <label htmlFor="rua">Logradouro: Av/Travessa/Rua</label>
                <input type="text" id="rua" />
                <label htmlFor="nunresidencia">Número da Casa/Edifício/Empresa</label>
                <input type="text" id="nunresidencia" />
                <DivRadio>
                    <input type="radio"
                        id="casa"
                        value="casa"
                        checked={radioSelect === "casa" ? true : false}
                        onChange={trocarRadioSelect}
                    />
                    <label htmlFor="casa">Casa</label>
                    <input type="radio"
                        id="edificio"
                        value="edificio"
                        checked={radioSelect === "edificio" ? true : false}
                        onChange={trocarRadioSelect}
                    />
                    <label htmlFor="edificio">Edifício</label>
                    <input type="radio"
                        id="empresa"
                        value="empresa"
                        checked={radioSelect === "empresa" ? true : false}
                        onChange={trocarRadioSelect}
                    />
                    <label htmlFor="empresa">Empresa</label>
                </DivRadio>
                <DivCnpj className={radioSelect}>
                    <label htmlFor="cnpj">Cnpj</label>
                    <input type="number" id="cnpj" />
                </DivCnpj>
                <DivNomeEdEmp className={radioSelect}>
                    <label htmlFor="predio">Nome do Edifício/Empresa</label>
                    <input type="text" id="predio" />
                    <label htmlFor="bloco">Bloco</label>
                    <input type="text" id="bloco" />
                    <label htmlFor="salaap">Apartamento/Sala</label>
                    <input type="text" id="salaap" />
                </DivNomeEdEmp>
                <label htmlFor="pontoref">Ponto de Referência</label>
                <textarea id="pontoref"></textarea>
                <label htmlFor="bairro">Bairro/Distrito</label>
                <input type="text" id="bairro" />
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" />
            </fieldset>
            <DivBtn>
                <SubmitButton title="Cadastrar Doador e ir para Cadastrar Doação" id="cadastrar_doacao" value="Cad Doador/Doação" />
                <SubmitButton title="Cadastrar Doador" id="cadastrar_doador" value="Cadastrar Doador" />
            </DivBtn>
        </FormDoador>
    )
}