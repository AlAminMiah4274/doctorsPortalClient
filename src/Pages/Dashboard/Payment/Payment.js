import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


// stripe promise value 
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const booking = useLoaderData();
    const {treatmentName, price, appointmentDate, slot} = booking;

    return (
        <div>
            <h1 className="text-3xl">Payment for {treatmentName}</h1>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>

            <div className="lg:w-1/2">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;