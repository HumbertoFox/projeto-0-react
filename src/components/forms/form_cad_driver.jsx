import { FormDonor } from "../../style/formcaddonorstyle";
import { Legend } from "../legend/legend_component";

export const FormCadDriver = () => {
    return (
        <FormDonor>
            <Legend>Cadastrar Motorista</Legend>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />
        </FormDonor>
    );
};