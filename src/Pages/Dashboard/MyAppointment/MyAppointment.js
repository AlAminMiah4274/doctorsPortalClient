import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyAppointment = () => {

    const { user } = useContext(AuthContext);

    // to load one's appointment data from database using react/tanstack query 
    const { data: bookings = [] } = useQuery({

        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className="p-7">
            <h1 className="text-2xl mb-6">My Appointment</h1>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead className="bg-gray-100">
                        <tr>
                            <th>Qty</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">

                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patientName}</td>
                                <td>{booking.treatmentName}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className="btn btn-secondary btn-xs text-white">PAY</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className="text-secondary font-bold">PAID</span>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAppointment;

/*
payment system: 
1. mobile banking
2. bank account 
3. credit card 
4. payment gateway 

international payment gateway: paypal, stripe
*/