import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
            <h1 className="text-xl text-center text-secondary">Available Services on {format(selectedDate, 'PP')}</h1>
        </div>
    );
};

export default AvailableAppointment;