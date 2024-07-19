import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { viaCepApi } from "../../services/viacep";
import { DivBtn, DivNomeEdEmp, DivRadio, FormDonor } from "../../style/formcaddonorstyle";
import { Legend } from "../legend/legend_component";
import { SubmitButton } from "../button/button_submit";
import { ButtonButton } from "../button/buttonbutton";

export const FormCadHelper = () => {
    const navidate = useNavigate();
    const [radioSelect, setRadioSelect] = useState("");
    const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm();

    const checkedZipCode = async (element) => {
        const clearZipCode = () => {
            setValue("zipcode", "");
            setValue("street", "");
            setValue("neighborhod", "");
            setValue("city", "");
        };

        if (!element.target.value) {
            clearZipCode();
            setFocus("cpf");
            alert("Formato de CEP inválido.");
            return;
        };

        const zipcode = element.target.value.replace(/\D/g, '');
        var validazipcode = /^[0-9]{8}$/;

        try {
            if (validazipcode.test(zipcode)) {
                const data = await viaCepApi.get(`${zipcode}/json/`).then(res => res.data);
                if (data && !data.erro) {
                    setValue("street", data.logradouro);
                    setValue("neighborhod", data.bairro);
                    setValue("city", data.localidade);
                    setFocus("nunresidence");
                } else {
                    clearZipCode();
                    setFocus("cpf");
                    alert("CEP não encontrado.");
                };
            } else {
                clearZipCode();
                setFocus("cpf");
                alert("Formato de CEP inválido.");
            };
        } catch (error) {
            console.error(error);
            clearZipCode();
            setFocus("cpf");
            alert(`Formato de CEP inválido ou não encontrado.`);
            return;
        };
    };
    const trocarRadioSelect = (element) => {
        const elementValue = element.target.value;
        setRadioSelect(elementValue);
        setValue("building", elementValue !== "house" ? "" : "...");
        setValue("block", elementValue !== "house" ? "" : "...");
        setValue("livingapartmentroom", elementValue !== "house" ? "" : "...");
    };
    const onSubmit = (element) => {
        console.log(element);
    };
    return (
        <FormDonor onSubmit={handleSubmit(onSubmit)}>
            <Legend>Dados do Motorista</Legend>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder={`${errors.name ? "Campo Obrigatório" : ""}`} className={`${errors.name ? "required" : ""}`} {...register("name", { required: true })} />
            <label htmlFor="cpf">CPF</label>
            <input type="number" id="cpf" placeholder={`${errors.cpf ? "Campo Obrigatório" : ""}`} className={`${errors.cpf ? "required" : ""}`} {...register("cpf", { required: true })} />
            <label htmlFor="zipcode">CEP</label>
            <input type="number" id="zipcode" {...register("zipcode")} onBlur={checkedZipCode} />
            <label htmlFor="street">Logradouro: Av/Travessa/Rua</label>
            <input type="text" id="street" placeholder={`${errors.street ? "Campo Obrigatório" : ""}`} className={`${errors.street ? "required" : ""}`} {...register("street", { required: true })} />
            <label htmlFor="nunresidence">Número da Casa/Edifício/Empresa</label>
            <input type="text" id="nunresidence" placeholder={`${errors.nunresidence ? "Campo Obrigatório" : ""}`} className={`${errors.nunresidence ? "required" : ""}`} {...register("nunresidence", { required: true })} />
            <DivRadio>
                <input type="radio" id="house" value="house" checked={radioSelect === "house" ? true : false} onChange={trocarRadioSelect} />
                <label htmlFor="house">Casa</label>
                <input type="radio" id="building" value="building" checked={radioSelect === "building" ? true : false} onChange={trocarRadioSelect} />
                <label htmlFor="building">Edifício</label>
            </DivRadio>
            <DivNomeEdEmp className={radioSelect}>
                <label htmlFor="building">Nome do Edifício/Empresa</label>
                <input type="text" id="building" placeholder={`${errors.building ? "Campo Obrigatório" : ""}`} className={`${errors.building ? "required" : ""}`} {...register("building", { required: true })} />
                <label htmlFor="block">Bloco</label>
                <input type="text" id="block" placeholder={`${errors.block ? "Campo Obrigatório" : ""}`} className={`${errors.block ? "required" : ""}`} {...register("block", { required: true })} />
                <label htmlFor="livingapartmentroom">Apartamento/Sala</label>
                <input type="text" id="livingapartmentroom" placeholder={`${errors.livingapartmentroom ? "Campo Obrigatório" : ""}`} className={`${errors.livingapartmentroom ? "required" : ""}`} {...register("livingapartmentroom", { required: true })} />
            </DivNomeEdEmp>
            <label htmlFor="neighborhod">Bairro/Distrito</label>
            <input type="text" id="neighborhod" placeholder={`${errors.neighborhod ? "Campo Obrigatório" : ""}`} className={`${errors.neighborhod ? "required" : ""}`} {...register("neighborhod", { required: true })} />
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" placeholder={`${errors.city ? "Campo Obrigatório" : ""}`} className={`${errors.city ? "required" : ""}`} {...register("city", { required: true })} />
            <DivBtn>
                <SubmitButton title="Cadastrar Ajudante" value="Cadastrar" />
                <ButtonButton title="Voltar ao Menu" onClick={() => navidate("/Menu")}>Menu</ButtonButton>
            </DivBtn>
        </FormDonor>
    );
};