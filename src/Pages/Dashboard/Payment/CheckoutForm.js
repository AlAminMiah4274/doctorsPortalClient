import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {

    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

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

        // to set payment method 
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        // to show error 
        if (error) {
            console.log(error);
            setCardError(error?.message);
        }
        else {
            setCardError('');
        }

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

                <button type="submit" className="btn btn-secondary btn-sm mt-5" disabled={!stripe}>
                    Pay
                </button>

            </form>
            <p className="text-red-500">{cardError}</p>
        </>
    );
};

export default CheckoutForm;