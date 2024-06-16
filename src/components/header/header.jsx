import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { MenuHeader, ImgEnterprise, LiLogout } from "../../style/headerstyle";
import EnterpriseImg from "../../assets/LOGO BFN - INTER.png";
import ClothesImg from "../../assets/doacao-de-roupas.png";
import UserImg from "../../assets/novo-usuario.png";
import DonationImg from "../../assets/doacao.png";
import VerifiedUserImg from "../../assets/usuario-verificado.png";
import AgendaImg from "../../assets/agenda.png";
import ConfirmImg from "../../assets/confirmar.png";
import ReportImg from "../../assets/relatorio.png";
import { Link, useNavigate } from "react-router-dom";
library.add(fas);
export const HeaderMenu = () => {
    const navigate = useNavigate();
    const [navMenuLi, setNavMenuLi] = useState("");
    const handlesMenuLiClick = (element) => {
        setNavMenuLi(element);
        localStorage.setItem("activeMenuLiSelection", element);
    };
    useEffect(() => {
        const activeMenuLiSelection = localStorage.getItem("activeMenuLiSelection");
        if (activeMenuLiSelection != null) {
            setNavMenuLi(activeMenuLiSelection);
            if (activeMenuLiSelection == "Cadastrar Doação") {
                navigate("/CadastroDoacao");
            } else if (activeMenuLiSelection == "Cadastrar Doador") {
                navigate("/CadastroDoador");
            } else if (activeMenuLiSelection == "Editar Doação") {
                navigate("/EditaDoacao");
            } else if (activeMenuLiSelection == "Editar Doador") {
                navigate("/EditaDoador");
            } else if (activeMenuLiSelection == "Agendar Coleta") {
                navigate("/AgendaColeta");
            } else if (activeMenuLiSelection == "Confirmar Coleta") {
                navigate("/ConfirmColeta");
            };
        } else {
            setNavMenuLi("Relatório");
        };
    }, []);
    return (
        <MenuHeader>
            <ImgEnterprise src={EnterpriseImg} alt="Logo Empresa" />
            <nav>
                <ul>
                    <li
                        title="Cadastrar Doação"
                        name="cadastro_doacao"
                        className={navMenuLi == "Cadastrar Doação" ? "active" : ""}
                        onClick={() => handlesMenuLiClick("Cadastrar Doação")}
                    >
                        <Link to={"/CadastroDoacao"}>
                            <img src={ClothesImg} alt="Icon Doação" />
                            <span>Cadastrar Doação</span>
                        </Link>
                    </li>
                    <li
                        title="Cadastrar Doador"
                        name="cadastro_doador"
                        className={navMenuLi == "Cadastrar Doador" ? "active" : ""}
                        onClick={() => handlesMenuLiClick("Cadastrar Doador")}
                    >
                        <Link to={"/CadastroDoador"}>
                            <img src={UserImg} alt="Icon Doador" />
                            <span>Cadastrar Doador</span>
                        </Link>
                    </li>
                    <li
                        title="Editar Doação"
                        name="editar_doacao"
                        className={navMenuLi == "Editar Doação" ? "active" : ""}
                        onClick={() => handlesMenuLiClick("Editar Doação")}
                    >
                        <Link to={"/EditaDoacao"}>
                            <img src={DonationImg} alt="Icon Editar Doação" />
                            <span>Editar Doação</span>
                        </Link>
                    </li>
                    <li
                        title="Editar Doador"
                        name="editar_doador"
                        className={navMenuLi == "Editar Doador" ? "active" : ""}
                        onClick={() => handlesMenuLiClick("Editar Doador")}
                    >
                        <Link to={"/EditaDoador"}>
                            <img src={VerifiedUserImg} alt="Icon Editar Doador" />
                            <span>Editar Doador</span>
                        </Link>
                    </li>
                    <li
                        title="Agendar Coleta"
                        name="agendar_coleta"
                        className={navMenuLi == "Agendar Coleta" ? "active" : ""}
                        onClick={() => handlesMenuLiClick("Agendar Coleta")}
                    >
                        <Link to={"/AgendaColeta"}>
                            <img src={AgendaImg} alt="Icon Agendar coleta" />
                            <span>Agendar Coleta</span>
                        </Link>
                    </li>
                    <li
                        title="Confirmar Coleta"
                        name="confirmar_coleta"
                        className={navMenuLi == "Confirmar Coleta" ? "active" : ""}
                        onClick={() => handlesMenuLiClick("Confirmar Coleta")}
                    >
                        <Link to={"/ConfirmColeta"}>
                            <img src={ConfirmImg} alt="Icon Confirmar Coleta" />
                            <span>Confirmar Coleta</span>
                        </Link>
                    </li>
                    <li
                        title="Relatório"
                        name="gerar_relatorio"
                        className={navMenuLi == "Relatório" ? "active" : ""}
                        onClick={() => handlesMenuLiClick("Relatório")}
                    >
                        <Link to={"/Relatorio"}>
                            <img src={ReportImg} alt="Icon Relatório" />
                            <span>Gerar Relatório</span>
                        </Link>
                    </li>
                    <LiLogout title="Sair do Sistema">
                        <Link to={"/"}>
                            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                            <span>Sair do Sistema</span>
                        </Link>
                    </LiLogout>
                </ul>
            </nav>
        </MenuHeader>
    );
};