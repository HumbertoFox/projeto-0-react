import React, {
    useState
} from "react"
import {
    MenuHeader,
    ImgEnterprise
} from "../../style/headerstyle";
import EnterpriseImg from "../../assets/dinheiro.png";
import ClothesImg from "../../assets/doacao-de-roupas.png";
import UserImg from "../../assets/novo-usuario.png";
import DonationImg from "../../assets/doacao.png";
import VerifiedUserImg from "../../assets/usuario-verificado.png";
import AgendaImg from "../../assets/agenda.png";
import ConfirmImg from "../../assets/confirmar.png";
import ReportImg from "../../assets/relatorio.png";
import { Link } from "react-router-dom";
var MenuList = "";

export const HeaderMenu = () => {

    const [navMenuLi, SetNavMenuLi] = useState(MenuList);

    const handlesMenuLiClick = (element) => {
        SetNavMenuLi(element);
        MenuList = element;
    };

    return (
        <MenuHeader>
            <ImgEnterprise src={EnterpriseImg} alt="Logo Empresa" />
            <nav>
                <ul>
                    <li title="Cadastrar Doação"
                        name="cadastro_doacao"
                    >
                        <Link to={"/cadastrar-doacao"}
                            className={navMenuLi === "Cadastrar Doação" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Cadastrar Doação")}
                        >
                            <img src={ClothesImg} alt="Icon Doação" />
                            <span>Cadastrar Doação</span>
                        </Link>
                    </li>
                    <li title="Cadastrar Doador"
                        name="cadastro_doador"
                    >
                        <Link to={"/cadastrar-doador"}
                            className={navMenuLi === "Cadastrar Doador" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Cadastrar Doador")}
                        >
                            <img src={UserImg} alt="Icon Doador" />
                            <span>Cadastrar Doador</span>
                        </Link>
                    </li>
                    <li title="Editar Doação"
                        name="editar_doacao"
                    >
                        <Link to={"/editar-doacao"}
                            className={navMenuLi === "Editar Doação" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Editar Doação")}
                        >
                            <img src={DonationImg} alt="Icon Editar Doação" />
                            <span>Editar Doação</span>
                        </Link>
                    </li>
                    <li title="Editar Doador"
                        name="editar_doador"
                    >
                        <Link to={"/editar-doador"}
                            className={navMenuLi === "Editar Doador" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Editar Doador")}
                        >
                            <img src={VerifiedUserImg} alt="Icon Editar Doador" />
                            <span>Editar Doador</span>
                        </Link>
                    </li>
                    <li title="Agendar Coleta"
                        name="agendar_coleta"
                    >
                        <Link to={"/"}
                            className={navMenuLi === "Agendar Coleta" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Agendar Coleta")}
                        >
                            <img src={AgendaImg} alt="Icon Agendar coleta" />
                            <span>Agendar Coleta</span>
                        </Link>
                    </li>
                    <li title="Confirmar Coleta"
                        name="confirmar_coleta"
                    >
                        <Link to={"/"}
                            className={navMenuLi === "Confirmar Coleta" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Confirmar Coleta")}
                        >
                            <img src={ConfirmImg} alt="Icon Confirmar Coleta" />
                            <span>Confirmar Coleta</span>
                        </Link>
                    </li>
                    <li title="Relatório"
                        name="gerar_relatorio"
                    >
                        <Link to={"/"}
                            className={navMenuLi === "Relatório" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Relatório")}
                        >
                            <img src={ReportImg} alt="Icon Relatório" />
                            <span>Gerar Relatório</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </MenuHeader>
    )
}