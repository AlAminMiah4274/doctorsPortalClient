import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []);

    return (
        <div className="mt-16">
            <h1 className="text-xl text-center text-secondary">Available Services on {format(selectedDate, 'PP')}</h1>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                    ></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;