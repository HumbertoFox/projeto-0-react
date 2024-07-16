import { useForm } from "react-hook-form";
import { DivBtn } from "../../style/formcaddonorstyle";
import { FormSearch } from "../../style/formsearchstyle";
import { SubmitButton } from "../button/button_submit";
import { Legend } from "../legend/legend_component";
export const FormSearchDonation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = e => {
        console.log(e);
    }
    return (
        <FormSearch onSubmit={handleSubmit(onSubmit)}>
            <Legend>Pesquisar Doação</Legend>
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
    );
};