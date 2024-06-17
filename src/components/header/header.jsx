import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { MenuHeader, ImgEnterprise, LiLogout, LiSvgRotation } from "../../style/headerstyle";
import EnterpriseImg from "../../assets/LOGO BFN - INTER.png";
import { Link, useNavigate } from "react-router-dom";
library.add(fas, far);
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
                navigate("/AgendarColeta");
            } else if (activeMenuLiSelection == "Confirmar Coleta") {
                navigate("/ConfirmColeta");
            } else if (activeMenuLiSelection == "Relatório") {
                navigate("/Relatorio");
            };
        } else {
            setNavMenuLi("Agenda");
        };
    }, []);
    return (
        <MenuHeader>
            <ImgEnterprise src={EnterpriseImg} alt="Logo Empresa" />
            <nav>
                <ul>
                    <li>
                        <Link
                            to={"/CadastroDoacao"}
                            title="Cadastrar Doação"
                            name="cadastro_doacao"
                            className={navMenuLi == "Cadastrar Doação" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Cadastrar Doação")}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                            <span>Cadastrar Doação</span>
                        </Link>
                    </li>
                    <LiSvgRotation>
                        <Link
                            to={"/CadastroDoador"}
                            title="Cadastrar Doador"
                            name="cadastro_doador"
                            className={navMenuLi == "Cadastrar Doador" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Cadastrar Doador")}                        
                        >
                            <FontAwesomeIcon icon="fa-solid fa-user-plus" />
                            <span>Cadastrar Doador</span>
                        </Link>
                    </LiSvgRotation>
                    <li>
                        <Link
                            to={"/EditaDoacao"}
                            title="Editar Doação"
                            name="editar_doacao"
                            className={navMenuLi == "Editar Doação" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Editar Doação")}
                        >
                            <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                            <span>Editar Doação</span>
                        </Link>
                    </li>
                    <LiSvgRotation>
                        <Link
                            to={"/EditaDoador"}
                            title="Editar Doador"
                            name="editar_doador"
                            className={navMenuLi == "Editar Doador" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Editar Doador")}                        
                        >
                            <FontAwesomeIcon icon="fa-solid fa-user-pen" />
                            <span>Editar Doador</span>
                        </Link>
                    </LiSvgRotation>
                    <li>
                        <Link
                            to={"/AgendarColeta"}
                            title="Agendar Coleta"
                            name="agendar_coleta"
                            className={navMenuLi == "Agendar Coleta" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Agendar Coleta")}                        
                        >
                            <FontAwesomeIcon icon="fa-regular fa-calendar-plus" />
                            <span>Agendar Coleta</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/ConfirmColeta"}
                            title="Confirmar Coleta"
                            name="confirmar_coleta"
                            className={navMenuLi == "Confirmar Coleta" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Confirmar Coleta")}                        
                        >
                            <FontAwesomeIcon icon="fa-regular fa-calendar-check" />
                            <span>Confirmar Coleta</span>
                        </Link>
                    </li>
                    <LiSvgRotation>
                        <Link
                            to={"/Relatorio"}
                            title="Relatório"
                            name="gerar_relatorio"
                            className={navMenuLi == "Relatório" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Relatório")}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-file-circle-check" />
                            <span>Relatório</span>
                        </Link>
                    </LiSvgRotation>
                    <li>
                        <Link
                            to={"/Agenda"}
                            title="Agenda"
                            name="Agenda"
                            className={navMenuLi == "Agenda" ? "active" : ""}
                            onClick={() => handlesMenuLiClick("Agenda")}
                        >
                            <FontAwesomeIcon icon="fa-regular fa-calendar-days" />
                            <span>Agenda</span>
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