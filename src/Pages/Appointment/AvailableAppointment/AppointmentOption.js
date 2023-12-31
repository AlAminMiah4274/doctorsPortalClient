import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    // destructured gotten from the AvailableAppointment component 
    const { name, slots, price } = appointmentOption;

    return (
        <div className="card shadow-2xl">

            <div className="card-body">

                {/* shown appointment name */}
                <h2 className="card-title justify-center">{name}</h2>

                <div className="text-center">
                    {/* shown appointment slots */}
                    <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>

                    {/* shown available spaces */}
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>

                    <p>Price: ${price}</p>
                </div>

                <div className="card-actions justify-center mt-10">

                    {/* shown the modal by clicking the button */}
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white"
                        // to opent the modal
                        onClick={() => document.getElementById('bookingModal').showModal()}
                        // to send the appointmentOption data in the BookingModal component 
                        onMouseEnter={() => setTreatment(appointmentOption)}
                        // to disable the button when there is no available slots 
                        disabled={slots.length === 0}
                    >Book Appointment</button>

                </div>

            </div>

        </div>
    );
};

export default AppointmentOption;