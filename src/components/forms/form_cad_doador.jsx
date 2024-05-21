import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { viaCepApi } from "../../services/viacep";
import {
    DivBtn,
    DivCnpj,
    DivNomeEdEmp,
    DivRadio,
    FormDoador
} from "../../style/formcaddoadorstyle";
import { SubmitButton } from "../button/button_submit";

export const FormCadDoador = (props) => {

    const [radioSelect, setRadioSelect] = useState("");

    const checkedCep = async (e) => {
        if (!e.target.value) {
            setFocus('contact3');
            alert("O campo CEP está vazio!");
            return;
        };
        const cep = e.target.value;
        try {
            const response = await viaCepApi.get(`${cep}/json/`)
            const data = await response.data;
            setValue('street', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setFocus('nunresidence');
        } catch (error) {
            console.log("ERROR" + error);
            alert("CEP não encontrado! Verifique os números digitado");
            setFocus('contact3');
            return;
        }
    };

    const trocarRadioSelect = e => {
        setRadioSelect(e.target.value);
    }

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
        <FormDoador method="POST" action="" onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={props.text}>
                <label htmlFor="donorcode">Código do Doador</label>
                <input type="text" id="donorcode" disabled={true} />
                <label htmlFor="name">Nome do Doador</label>
                <input type="text" id="name" {...register("name")} />
                <label htmlFor="contact1">Número Móvel do Responsável</label>
                <input type="tel" id="contact1" {...register("contact1")} />
                <label htmlFor="contact2">Número Móvel do Responsável/Opcional</label>
                <input type="tel" id="contact2" {...register("contact2")} />
                <label htmlFor="contact3">Número Fixo do Contato/Opcional ou Ramal</label>
                <input type="tel" id="contact3" {...register("contact3")} />
                <label htmlFor="cep">Cep</label>
                <input type="number" id="cep" {...register("cep")} onBlur={checkedCep} />
                <label htmlFor="street">Logradouro: Av/Travessa/Rua</label>
                <input type="text" id="street" {...register("street")} />
                <label htmlFor="nunresidence">Número da Casa/Edifício/Empresa</label>
                <input type="text" id="nunresidence" {...register("nunresidence")} />
                <DivRadio>
                    <input type="radio"
                        id="house"
                        value="house"
                        checked={radioSelect === "house" ? true : false}
                        onChange={trocarRadioSelect}
                    />
                    <label htmlFor="house">Casa</label>
                    <input type="radio"
                        id="building"
                        value="building"
                        checked={radioSelect === "building" ? true : false}
                        onChange={trocarRadioSelect}
                    />
                    <label htmlFor="building">Edifício</label>
                    <input type="radio"
                        id="enterprise"
                        value="enterprise"
                        checked={radioSelect === "enterprise" ? true : false}
                        onChange={trocarRadioSelect}
                    />
                    <label htmlFor="enterprise">Empresa</label>
                </DivRadio>
                <DivCnpj className={radioSelect}>
                    <label htmlFor="cnpj">Cnpj</label>
                    <input type="number" id="cnpj" {...register("cnpj")} />
                </DivCnpj>
                <DivNomeEdEmp className={radioSelect}>
                    <label htmlFor="building">Nome do Edifício/Empresa</label>
                    <input type="text" id="building" {...register("building")} />
                    <label htmlFor="block">Bloco</label>
                    <input type="text" id="block" {...register("block")} />
                    <label htmlFor="livingapartmentroom">Apartamento/Sala</label>
                    <input type="text" id="livingapartmentroom" {...register("livingapartmentroom")} />
                </DivNomeEdEmp>
                <label htmlFor="referencepoint">Ponto de Referência</label>
                <textarea id="referencepoint" {...register("referencepoint")} ></textarea>
                <label htmlFor="neighborhood">Bairro/Distrito</label>
                <input type="text" id="neighborhood" {...register("neighborhood")} />
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" {...register("city")} />
            </fieldset>
            <DivBtn>
                <SubmitButton title="Cadastrar Doador e ir para Cadastrar Doação" id="cadastrar_doacao" value="Cad Doador/Doação" />
                <SubmitButton title="Cadastrar Doador" id="cadastrar_doador" value="Cadastrar Doador" />
            </DivBtn>
        </FormDoador>
    )
}