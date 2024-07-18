import { FormCadDriver } from "../components/forms/form_cad_driver";
import { MenuFormDiv, MenuMain } from "../style/menustyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export const CadDriverPage = () => {
    return (
        <MenuMain>
            <MenuFormDiv>
                <FontAwesomeIcon icon="fa-solid fa-id-card" />
                <FormCadDriver />
            </MenuFormDiv>
        </MenuMain>
    );
};