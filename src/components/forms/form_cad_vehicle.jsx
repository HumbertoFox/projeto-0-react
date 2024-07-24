import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DivBtn, FormDonor } from "../../style/formcaddonorstyle";
import { Legend } from "../legend/legend_component";
import { SubmitButton } from "../button/button_submit";
import { ButtonButton } from "../button/buttonbutton";

export const FormCadVehicle = () => {
    const navidate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (element) => {
        console.log(element);
    };
    return (
        <FormDonor onSubmit={handleSubmit(onSubmit)}>
            <Legend>Dados do Veículo</Legend>
            <label htmlFor="name">Modelo</label>
            <input type="text" id="name" placeholder={`${errors.name ? "Campo Obrigatório" : ""}`} className={`${errors.name ? "required" : ""}`} {...register("name", { required: true })} />
            <label htmlFor="chassi">Chassi</label>
            <input type="text" id="cahssi" placeholder={`${errors.chassi ? "Campo Obrigatório" : ""}`} className={`${errors.chassi ? "required" : ""}`} {...register("chassi", { required: true })} />
            <label htmlFor="plate">Placa</label>
            <input type="text" id="plate" placeholder={`${errors.plate ? "Campo Obrigatório" : ""}`} className={`${errors.plate ? "required" : ""}`} {...register("plate", { required: true })} />
            <label htmlFor="km">Km</label>
            <input type="number" id="km" placeholder={`${errors.km ? "Campo Obrigatório" : ""}`} className={`${errors.km ? "required" : ""}`} {...register("km", { required: true })} />
            <DivBtn>
                <SubmitButton title="Cadastrar Motorista" value="Cadastrar" />
                <ButtonButton title="Voltar ao Menu" onClick={() => navidate("/Menu")}>Menu</ButtonButton>
            </DivBtn>
        </FormDonor>
    );
};