import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyAppointment = () => {

    const { user } = useContext(AuthContext);


    // to laod bookings data from database using tanstack query 
    const { data: bookings = [], } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    console.log(bookings);

    return (
        <div className="p-10">
            <h1 className="text-2xl mb-6">My Appointment</h1>

            <div className="overflow-x-auto">
                <table className="table">

                    {/* head */}
                    <thead className="bg-gray-300">
                        <tr>
                            <th>Qty</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {
                            bookings.map((booking, i) => <tr
                                key={i}
                            >
                                <th>{i+1}</th>
                                <td>{booking.patientName}</td>
                                <td>{booking.treatmentName}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAppointment;