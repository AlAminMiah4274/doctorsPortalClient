import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {

    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { price, patientEmail, patientName, _id } = booking;


    // to get client secret key from server side
    useEffect(() => {
        fetch(`https://doctors-portal-server-ashen-omega.vercel.app/create-payment-intents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            })
    }, [price]);

    // to control the checkout form 
    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // to get card info 
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // to create payment method 
        const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        // to show payment method error 
        if (paymentMethodError) {
            setCardError(paymentMethodError?.message);
        }
        else {
            setCardError('');
        }

        setSuccess(''); // to empty setSuccess state
        setProcessing(true); // to start processing before confirm card payment 
        // to confirm card payment 
        const { paymentIntent, error: cardPaymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: patientEmail
                }
            }
        });


        if (cardPaymentError) {
            setCardError(cardPaymentError.message);
        }

        if (paymentIntent?.status === "succeeded") {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                patientEmail,
                bookingId: _id
            };

            // to store payment info in the database 
            fetch(`https://doctors-portal-server-ashen-omega.vercel.app/payments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.acknowledged) {
                        setSuccess("Congrats! Your payment completed");
                        setTransactionId(paymentIntent.id);
                    }
                })
        }

        setProcessing(false);

    };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <CardElement />

                <button type="submit" className="btn btn-secondary btn-sm mt-5" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className="text-green-500">{success}</p>
                    <p>Your Transaction Id: <span className="font-bold">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;