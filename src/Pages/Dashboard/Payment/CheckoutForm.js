import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {

    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const { price, patientEmail, patientName } = booking;


    // to get client secret key from server side
    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.clientSecret);
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
            console.log(paymentMethodError);
            setCardError(paymentMethodError?.message);
        }
        else {
            setCardError('');
        }

        // to confirm card payment 
        const { paymentIntent, error: cardPaymentError } = await stripe.confirmCardPayment({
            clientSecret,
            payment_method: {
                card: card,
                billing_dtails: {
                    name: patientName,
                    email: patientEmail
                }
            }
        });

    };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#424770'
                                }
                            },
                            invalid: {
                                color: '#9e2146'
                            }
                        }
                    }}
                />

                <button type="submit" className="btn btn-secondary btn-sm mt-5" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>
            <p className="text-red-500">{cardError}</p>
        </>
    );
};

export default CheckoutForm;