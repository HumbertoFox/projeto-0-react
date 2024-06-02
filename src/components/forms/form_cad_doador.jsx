import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { viaCepApi } from "../../services/viacep";
import { DivBtn, DivCnpj, DivNomeEdEmp, DivRadio, FormDoador } from "../../style/formcaddoadorstyle";
import { SubmitButton } from "../button/button_submit";
import { Legend } from "../legend/legend_component";

export const FormCadDoador = (props) => {

    const [radioSelect, setRadioSelect] = useState("");

    const checkedZipCode = async (e) => {

        const clearZipCode = () => {
            setValue('zipcode', "");
            setValue('street', "");
            setValue('neighborhood', "");
            setValue('city', "");
        };

        if (!e.target.value) {
            clearZipCode();
            setFocus('contact3');
            alert("Formato de CEP inválido.");
            return;
        };

        const zipcode = e.target.value.replace(/\D/g, '');
        var validazipcode = /^[0-9]{8}$/;

        try {
            if (validazipcode.test(zipcode)) {
                const data = await viaCepApi.get(`${zipcode}/json/`)
                    .then(res => res.data);
                if (data && !data.erro) {
                    setValue('street', data.logradouro);
                    setValue('neighborhood', data.bairro);
                    setValue('city', data.localidade);
                    setFocus('nunresidence');
                } else {
                    clearZipCode();
                    setFocus('contact3');
                    alert("CEP não encontrado.");
                }
            } else {
                clearZipCode();
                setFocus('contact3');
                alert("Formato de CEP inválido.");
            }
        } catch (error) {
            console.error(error);
            clearZipCode();
            setFocus('contact3');
            alert(`Formato de CEP inválido ou não encontrado.`);
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
                <Legend>Informações do Doador</Legend>
                <label htmlFor="donorcode">Código do Doador</label>
                <input type="text" id="donorcode" disabled={true} />
                <label htmlFor="name">Nome do Doador</label>
                <input type="text" id="name" placeholder={`${errors.name ? "Campo Obrigatório" : ""}`} className={`${errors.name ? "required" : ""}`}{...register("name", { required: "Required field" })} />
                <label htmlFor="contact1">Número Móvel do Responsável</label>
                <input type="tel" id="contact1" placeholder={`${errors.contact1 ? "Campo Obrigatório" : ""}`} className={`${errors.contact1 ? "required" : ""}`} {...register("contact1", { required: "Required field" })} />
                <label htmlFor="contact2">Número Móvel do Responsável/Opcional</label>
                <input type="tel" id="contact2" placeholder={`${errors.contact2 ? "Campo Obrigatório" : ""}`} className={`${errors.contact2 ? "required" : ""}`} {...register("contact2", { required: "Required field" })} />
                <label htmlFor="contact3">Número Fixo do Contato/Opcional ou Ramal</label>
                <input type="tel" id="contact3" {...register("contact3")} />
                <label htmlFor="zipcode">Cep</label>
                <input type="number" id="zipcode" {...register("zipcode")} onBlur={checkedZipCode} />
                <label htmlFor="street">Logradouro: Av/Travessa/Rua</label>
                <input type="text" id="street" placeholder={`${errors.street ? "Campo Obrigatório" : ""}`} className={`${errors.street ? "required" : ""}`} {...register("street", { required: "Required field" })} />
                <label htmlFor="nunresidence">Número da Casa/Edifício/Empresa</label>
                <input type="text" id="nunresidence" placeholder={`${errors.nunresidence ? "Campo Obrigatório" : ""}`} className={`${errors.nunresidence ? "required" : ""}`} {...register("nunresidence", { required: "Required field" })} />
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
                <input type="text" id="neighborhood" placeholder={`${errors.neighborhood ? "Campo Obrigatório" : ""}`} className={`${errors.neighborhood ? "required" : ""}`} {...register("neighborhood", { required: "Required field" })} />
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" placeholder={`${errors.city ? "Campo Obrigatório" : ""}`} className={`${errors.city ? "required" : ""}`} {...register("city", { required: "Required field" })} />
            </fieldset>
            <DivBtn>
                <SubmitButton title="Cadastrar Doador e ir para Cadastrar Doação" id="cadastrar_doacao" value="Cad Doador/Doação" />
                <SubmitButton title="Cadastrar Doador" id="cadastrar_doador" value="Cadastrar Doador" />
            </DivBtn>
        </FormDoador>
    )
}