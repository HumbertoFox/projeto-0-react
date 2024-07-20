import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { viaCepApi } from "../../services/viacep";
import { DivBtn, DivCnpj, DivCodDonor, DivNomeEdEmp, DivRadio, FormDonor } from "../../style/formcaddonorstyle";
import { SubmitButton } from "../button/button_submit";
import { Legend } from "../legend/legend_component";
export const FormCadDonor = ({ fieldsetdonor, $donorCod, searchDonor }) => {
    const [radioSelect, setRadioSelect] = useState("");
    const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm();
    
    const checkedZipCode = async (element) => {
        const clearZipCode = () => {
            setValue('zipcode', "");
            setValue('street', "");
            setValue('neighborhood', "");
            setValue('city', "");
        };

        if (!element.target.value) {
            clearZipCode();
            setFocus('contact3');
            alert("Formato de CEP inválido.");
            return;
        };

        const zipcode = element.target.value.replace(/\D/g, '');
        var validazipcode = /^[0-9]{8}$/;

        try {
            if (validazipcode.test(zipcode)) {
                const data = await viaCepApi.get(`${zipcode}/json/`).then(res => res.data);
                if (data && !data.erro) {
                    setValue('street', data.logradouro);
                    setValue('neighborhood', data.bairro);
                    setValue('city', data.localidade);
                    setFocus('nunresidence');
                } else {
                    clearZipCode();
                    setFocus('contact3');
                    alert("CEP não encontrado.");
                };
            } else {
                clearZipCode();
                setFocus('contact3');
                alert("Formato de CEP inválido.");
            };
        } catch (error) {
            console.error(error);
            clearZipCode();
            setFocus('contact3');
            alert(`Formato de CEP inválido ou não encontrado.`);
            return;
        };
    };
    const trocarRadioSelect = (element) => {
        const elementValue = element.target.value;
        setRadioSelect(elementValue);
        setValue("cnpj", elementValue === "enterprise" ? "" : "...");
        setValue("building", elementValue !== "house" ? "" : "...");
        setValue("block", elementValue !== "house" ? "" : "...");
        setValue("livingapartmentroom", elementValue !== "house" ? "" : "...");
    };
    const onSubmit = (element) => {
        console.log(element);
    };
    
    useEffect(() => {
        if (searchDonor) {
            setValue("donorcode", searchDonor.codnametel);
        };
    }, [searchDonor]);
    return (
        <FormDonor onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={fieldsetdonor}>
                <Legend>Informações do Doador</Legend>
                <DivCodDonor $donorCod={$donorCod}>
                    <label htmlFor="donorcode">Código do Doador</label>
                    <input type="text" id="donorcode" disabled={true} {...register("donorcode")} />
                </DivCodDonor>
                <label htmlFor="name">Nome do Doador</label>
                <input type="text" id="name" placeholder={`${errors.name ? "Campo Obrigatório" : ""}`} className={`${errors.name ? "required" : ""}`} {...register("name", { required: true })} />
                <label htmlFor="contact1">Número Móvel do Responsável</label>
                <input type="tel" id="contact1" placeholder={`${errors.contact1 ? "Campo Obrigatório" : ""}`} className={`${errors.contact1 ? "required" : ""}`} {...register("contact1", { required: true })} />
                <label htmlFor="contact2">Número Móvel do Responsável/Opcional</label>
                <input type="tel" id="contact2" placeholder={`${errors.contact2 ? "Campo Obrigatório" : ""}`} className={`${errors.contact2 ? "required" : ""}`} {...register("contact2", { required: true })} />
                <label htmlFor="contact3">Número Fixo do Contato/Opcional ou Ramal</label>
                <input type="tel" id="contact3" {...register("contact3")} />
                <label htmlFor="zipcode">CEP</label>
                <input type="number" id="zipcode" {...register("zipcode")} onBlur={checkedZipCode} />
                <label htmlFor="street">Logradouro: Av/Travessa/Rua</label>
                <input type="text" id="street" placeholder={`${errors.street ? "Campo Obrigatório" : ""}`} className={`${errors.street ? "required" : ""}`} {...register("street", { required: true })} />
                <label htmlFor="nunresidence">Número da Casa/Edifício/Empresa</label>
                <input type="text" id="nunresidence" placeholder={`${errors.nunresidence ? "Campo Obrigatório" : ""}`} className={`${errors.nunresidence ? "required" : ""}`} {...register("nunresidence", { required: true })} />
                <DivRadio>
                    <input type="radio" id="house" value="house" checked={radioSelect === "house" ? true : false} onChange={trocarRadioSelect} />
                    <label htmlFor="house">Casa</label>
                    <input type="radio" id="buildings" value="building" checked={radioSelect === "building" ? true : false} onChange={trocarRadioSelect} />
                    <label htmlFor="buildings">Edifício</label>
                    <input type="radio" id="enterprise" value="enterprise" checked={radioSelect === "enterprise" ? true : false} onChange={trocarRadioSelect} />
                    <label htmlFor="enterprise">Empresa</label>
                </DivRadio>
                <DivCnpj className={radioSelect}>
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" placeholder={`${errors.cnpj ? "Campo Obrigatório" : ""}`} className={`${errors.cnpj ? "required" : ""}`} {...register("cnpj", { required: true })} />
                </DivCnpj>
                <DivNomeEdEmp className={radioSelect}>
                    <label htmlFor="building">Nome do Edifício/Empresa</label>
                    <input type="text" id="building" placeholder={`${errors.building ? "Campo Obrigatório" : ""}`} className={`${errors.building ? "required" : ""}`} {...register("building", { required: true })} />
                    <label htmlFor="block">Bloco</label>
                    <input type="text" id="block" placeholder={`${errors.block ? "Campo Obrigatório" : ""}`} className={`${errors.block ? "required" : ""}`} {...register("block", { required: true })} />
                    <label htmlFor="livingapartmentroom">Apartamento/Sala</label>
                    <input type="text" id="livingapartmentroom" placeholder={`${errors.livingapartmentroom ? "Campo Obrigatório" : ""}`} className={`${errors.livingapartmentroom ? "required" : ""}`} {...register("livingapartmentroom", { required: true })} />
                </DivNomeEdEmp>
                <label htmlFor="referencepoint">Ponto de Referência</label>
                <textarea id="referencepoint" placeholder={`${errors.referencepoint ? "Campo Obrigatório" : ""}`} className={`${errors.referencepoint ? "required" : ""}`} {...register("referencepoint", { required: true })}></textarea>
                <label htmlFor="neighborhood">Bairro/Distrito</label>
                <input type="text" id="neighborhood" placeholder={`${errors.neighborhood ? "Campo Obrigatório" : ""}`} className={`${errors.neighborhood ? "required" : ""}`} {...register("neighborhood", { required: true })} />
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" placeholder={`${errors.city ? "Campo Obrigatório" : ""}`} className={`${errors.city ? "required" : ""}`} {...register("city", { required: true })} />
            </fieldset>
            <DivBtn>
                <SubmitButton title="Cadastrar Doador e ir para Cadastrar Doação" id="cadastrar_doacao" value="Cad Doador/Doação" />
                <SubmitButton title="Cadastrar Doador" id="cadastrar_doador" value="Cadastrar Doador" />
            </DivBtn>
        </FormDonor>
    );
};