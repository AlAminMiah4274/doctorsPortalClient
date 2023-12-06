import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectedDate }) => {

    // const [appointmentOptions, setAppointmentOptions] = useState([]);

    // declared this state for getting appointmentOption data from the appointmentOption component using onMouseEnter
    const [treatment, setTreatment] = useState(null); // treatment is another name of appointmentOption

    // tanstack/react query 
    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions`);
            const data = await res.json();
            return data;
        }
    });

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, []);

    return (
        <div className="mt-16">
            <h1 className="text-xl text-center text-secondary">Available Services on {format(selectedDate, 'PP')}</h1>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>

            {
                // used treatment && to prevent the error. Because the inital value of this state is null
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;