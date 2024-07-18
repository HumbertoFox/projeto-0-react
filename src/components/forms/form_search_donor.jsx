import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DivBtn } from "../../style/formcaddonorstyle";
import { FormSearch } from "../../style/formsearchstyle";
import { SubmitButton } from "../button/button_submit";
import { Legend } from "../legend/legend_component";
export const FormSearchDonor = ({ searchDonor }) => {
    const [donorSearch, setDonorSearch] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (element) => {
        setDonorSearch(element);
    };
    
    useEffect(() => {
        searchDonor(donorSearch);
    }, [donorSearch]);
    return (
        <FormSearch onSubmit={handleSubmit(onSubmit)}>
            <Legend>Pesquisar Doador</Legend>
            <label htmlFor="codnametel">Pesquisar Nome/Telefone/Código Doador</label>
            <input type="search" id="codnametel" placeholder={`${errors.codnametel ? "Campo Obrigatório" : ""}`} className={`${errors.codnametel ? "required" : ""}`} {...register("codnametel", { required: true })} />
            <DivBtn>
                <SubmitButton value="Código" />
                <SubmitButton value="Nome" />
                <SubmitButton value="Telefone" />
            </DivBtn>
        </FormSearch>
    );
};