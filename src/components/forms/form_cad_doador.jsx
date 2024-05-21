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
    
    const onSubmit = e => {
        console.log(e);
    }

    return (
        <FormDoador method="POST" action="" onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={props.text}>
                <label htmlFor="donorcode">Código do Doador</label>
                <input type="text" id="donorcode" disabled={true} />
                <label htmlFor="name">Nome do Doador</label>
                <input type="text" id="name" />
                <label htmlFor="contact1">Número Móvel do Responsável</label>
                <input type="tel" id="contact1" />
                <label htmlFor="contact2">Número Móvel do Responsável/Opcional</label>
                <input type="tel" id="contact2" />
                <label htmlFor="contact3">Número Fixo do Contato/Opcional ou Ramal</label>
                <input type="tel" id="contact3" />
                <label htmlFor="cep">Cep</label>
                <input type="number" id="cep" />
                <label htmlFor="street">Logradouro: Av/Travessa/Rua</label>
                <input type="text" id="street" />
                <label htmlFor="nunresidence">Número da Casa/Edifício/Empresa</label>
                <input type="text" id="nunresidence" />
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
                    <label htmlFor="building">Nome do Edifício/Empresa</label>
                    <input type="text" id="building" />
                    <label htmlFor="block">Bloco</label>
                    <input type="text" id="block" />
                    <label htmlFor="livingapartmentroom">Apartamento/Sala</label>
                    <input type="text" id="livingapartmentroom" />
                </DivNomeEdEmp>
                <label htmlFor="Referencepoint">Ponto de Referência</label>
                <textarea id="Reference point"></textarea>
                <label htmlFor="neighborhood">Bairro/Distrito</label>
                <input type="text" id="neighborhood" />
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" />
            </fieldset>
            <DivBtn>
                <SubmitButton title="Cadastrar Doador e ir para Cadastrar Doação" id="cadastrar_doacao" value="Cad Doador/Doação" />
                <SubmitButton title="Cadastrar Doador" id="cadastrar_doador" value="Cadastrar Doador" />
            </DivBtn>
        </FormDoador>
    )
}