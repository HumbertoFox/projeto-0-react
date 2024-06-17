import React from "react";
import { DivEventsActive, DivMaimEvents } from "../../style/eventactivitystyle";
import { ButtonButton } from "../button/buttonbutton";
export const ActivityActive = ({ event, onClose }) => {
    return (
        <DivMaimEvents>
            <DivEventsActive>
                <h2>Nome: {event.title}</h2>
                <h3>Telefone: {event.name}</h3>
                <p>Ficha: {event.telephone}</p>
                <p>Endereço: {event.plan}</p>
                <span>Veículo: {event.desc}</span>
                <p>OBS: {event.observation}</p>
                <p>Início da Rota: {event.start.toLocaleString()}</p>
                <p>Termino da Rota: {event.end.toLocaleString()}</p>
                <ButtonButton onClick={onClose}>Fechar</ButtonButton>
            </DivEventsActive>
        </DivMaimEvents>
    );
};