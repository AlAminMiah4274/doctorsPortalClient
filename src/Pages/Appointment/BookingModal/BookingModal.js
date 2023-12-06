import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {

    // destructured gotten from the AvailableAppointment component 
    const { name, slots } = treatment;
    const {user} = useContext(AuthContext);

    const date = format(selectedDate, "PP");

    // to handle the modal form
    const handleBooking = event => {

        // to prevent refreshing after clicking on the submit button 
        event.preventDefault();

        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        // to organise the booking modal data for sending to the database 
        const booking = {
            appointmentDate: date,
            treatmentName: name,
            patientName,
            patientEmail: email,
            patientPhone: phone,
            slot
        };

        console.log(booking);

        // to close the modal after submitting 
        setTreatment(null);
    };

    return (
        <>
            <dialog id="bookingModal" className="modal">

                <div className="modal-box">

                    <h3 className="font-bold text-lg">{name}</h3>

                    <form onSubmit={handleBooking} method="dialog" className="grid grid-cols-1 gap-5 mt-10">

                        <input type="text" disabled value={date} className="input input-bordered w-full" />

                        <select name="slot" className="select select-bordered w-full">
                            {slots.map((slot, i) => <option
                                value={slot}
                                key={i}
                            >{slot}</option>)}
                        </select>

                        <input name="name" type="text" disabled defaultValue={user.displayName} className="input input-bordered w-full" required />
                        <input name="email" type="email" disabled defaultValue={user.email} className="input input-bordered w-full" required />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <br />
                        <input type="submit" value="Submit" className="btn w-full btn-accent" />

                    </form>

                </div>

                {/* to close the modal. Because two button in a form both work same action */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>

            </dialog>
        </>
    );
};

export default BookingModal;