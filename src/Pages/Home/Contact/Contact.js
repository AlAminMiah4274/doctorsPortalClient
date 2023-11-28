import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import bgImage from "../../../assets/images/appointment.png"

const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="text-center p-10">

            <div>
                <h5 className="font-bold text-secondary">Contact Us</h5>
                <h1 className="text-4xl text-white">Stay connected with us</h1>
            </div>

            <div className="my-5">
                <input type="email" placeholder="Email address" className="input input-bordered input-md w-1/2 mb-4" />
                <br />
                <input type="text" placeholder="Subject" className="input input-bordered input-md w-1/2 mb-4" />
                <br />
                <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg w-1/2" ></textarea>
            </div>

            <div>
                <PrimaryButton>Submit</PrimaryButton>
            </div>

        </div>
    );
};

export default Contact;