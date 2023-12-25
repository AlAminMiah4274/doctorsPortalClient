import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../../components/Loading/Loading";


// stripe promise value 
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const booking = useLoaderData();
    const {treatmentName, price, appointmentDate, slot} = booking;
    const navigation = useNavigation();
    
    if(navigation.state === "loading"){
        return <Loading></Loading>
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl">Payment for {treatmentName}</h1>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>

            <div className="lg:w-1/2 mt-5 shadow-xl p-6">
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