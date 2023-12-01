import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {

    // destructured gotten from the AvailableAppointment component 
    const { name, slots } = treatment;

    const date = format(selectedDate, "PP");

    return (
        <>
            <dialog id="bookingModal" className="modal">

                <div className="modal-box">

                    <h3 className="font-bold text-lg">{name}</h3>

                    <form method="dialog" className="grid grid-cols-1 gap-5 mt-10">

                        <input type="text" name="age" disabled value={date} className="input input-bordered w-full" />

                        <select className="select select-bordered w-full">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>

                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type="text" name="phoneNumber" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" value="Submit" className="btn w-full btn-accent" />

                    </form>

                </div>

                {/* to close the modal. Because tow button in a form both work same action */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>

            </dialog>
        </>
    );
};

export default BookingModal;