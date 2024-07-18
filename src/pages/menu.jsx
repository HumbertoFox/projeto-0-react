import { MenuDiv, MenuMain } from "../style/menustyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
library.add(fas);

export const MenuPage = () => {
    return (
        <MenuMain>
            <MenuDiv>
                <Link to={"/"}>
                    <FontAwesomeIcon icon="fa-solid fa-truck" />
                </Link>
                <Link to={"/CadastroMotorista"}>
                    <FontAwesomeIcon icon="fa-solid fa-id-card" />
                </Link>
            </MenuDiv>
        </MenuMain>
    );
};