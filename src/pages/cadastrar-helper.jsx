import { FormCadHelper } from "../components/forms/form_cad_helper";
import { MenuFormDiv, MenuMain } from "../style/menustyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export const CadHelperPage = () => {
    return (
        <MenuMain>
            <MenuFormDiv>
                <FontAwesomeIcon icon="fa-solid fa-person-shelter" />
                <FormCadHelper />
            </MenuFormDiv>
        </MenuMain>
    );
};