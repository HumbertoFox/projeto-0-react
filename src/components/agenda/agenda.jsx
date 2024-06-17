import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "moment/dist/locale/pt-br";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import widthDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { CustomToolbar } from "../toobar/tobarcalendar";
import { ActivityActive } from "../modal/eventactivity";
import { DivAgenda } from "../../style/divmainpagestyle";
import { eventsAvtivityTest } from "../../services/eventstest";
const DragAndDropCaledar = widthDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);
export const AgendaCalendar = () => {
    const [events, setEvents] = useState(eventsAvtivityTest);
    const [eventSelected, setEventSelected] = useState(null);
    const handleEventSelectClick = (element) => {
        setEventSelected(element);
    };
    const handleEventSelectClose = () => {
        setEventSelected(null);
    };
    const styleColor = (element) => ({
        style: {
            backgroundColor: element.color
        }
    });
    return (
        <DivAgenda>
            <DragAndDropCaledar
                defaultDate={moment().toDate()}
                defaultView="month"
                events={events}
                localizer={localizer}
                resizable
                eventPropGetter={styleColor}
                onSelectEvent={handleEventSelectClick}
                className="agenda"
                components={{
                    toolbar: CustomToolbar,
                }}
            />
            {eventSelected && (
                <ActivityActive
                    event={eventSelected}
                    onClose={handleEventSelectClose}
                />
            )}
        </DivAgenda>
    );
};