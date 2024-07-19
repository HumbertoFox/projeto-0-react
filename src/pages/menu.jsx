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
                <Link title="Inicio" to={"/"}>
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                </Link>
                <Link title="Cadastrar Veiculo" to={"/"}>
                    <FontAwesomeIcon icon="fa-solid fa-truck" />
                </Link>
                <Link title="Cadastrar Motorista" to={"/CadastroMotorista"}>
                    <FontAwesomeIcon icon="fa-solid fa-id-card" />
                </Link>
                <Link title="Cadastrar Ajudante" to={"/CadastrarAjudante"}>
                    <FontAwesomeIcon icon="fa-solid fa-person-shelter" />
                </Link>
            </MenuDiv>
        </MenuMain>
    );
};