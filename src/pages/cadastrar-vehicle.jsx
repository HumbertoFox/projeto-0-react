import { FormCadVehicle } from "../components/forms/form_cad_vehicle";
import { MenuFormDiv, MenuMain } from "../style/menustyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export const CadVehiclePage = () => {
    return (
        <MenuMain>
            <MenuFormDiv>
                <FontAwesomeIcon icon="fa-solid fa-truck" />
                <FormCadVehicle />
            </MenuFormDiv>
        </MenuMain>
    );
};