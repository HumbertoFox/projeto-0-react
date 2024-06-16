import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "moment/dist/locale/pt-br";
import moment from "moment";
import widthDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
const DragAndDropCaledar = widthDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);
export const AgendaCalendar = () => {
    return (
        <DragAndDropCaledar
            defaultDate={moment().toDate()}
            defaultView="month"
            events={""}
            localizer={localizer}
            resizable
            eventPropGetter={""}
            onSelectEvent={""}
            className="agenda"
        />
    );
};