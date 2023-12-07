import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {

    // destructured gotten from the AvailableAppointment component 
    const { name, slots } = treatment;
    const { user } = useContext(AuthContext);

    const date = format(selectedDate, "PP");

    // to handle the modal form
    const handleBooking = (event) => {

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

        // to send the bookings data to the database 
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                // to ensure the user booking confirmation 
                if (data.acknowledged) {
                    toast.success("Booking Confirmed");

                    // to close the modal after submitting 
                    setTreatment(null);

                    // a hook of react query from availableAppointment. Used to refresh available data 
                    refetch();
                }
                else{
                    toast.error(data.message);

                    // to close the modal after submitting
                    setTreatment(null);
                }
            })
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

                        <input name="name" type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-full" required />
                        <input name="email" type="email" disabled defaultValue={user?.email} className="input input-bordered w-full" required />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <br />

                        {
                            user?.uid ?
                                <input type="submit" value="Submit" className="btn w-full btn-accent" /> :
                                <Link to="/login"><button className="btn w-full btn-secondary text-white">Login First</button></Link>
                        }

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