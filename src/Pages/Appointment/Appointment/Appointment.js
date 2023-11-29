import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {

    // a state where is being created localized date for the calendar  
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            
            <AvailableAppointment 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;