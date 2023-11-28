import React from "react";

const TestimonialCard = ({ speech }) => {

    const { name, statement, image, address } = speech;

    return (
        <div className="card shadow-xl mt-20">
            <div className="card-body">

                <p>{statement}</p>

                <div className="card-actions flex items-center mt-5">
                    <img src={image} alt="" className="rounded-xl h-16 border-4 rounded-full border-secondary" />

                    <div>
                        <p className="font-semibold text-xl">{name}</p>
                        <p>{address}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default TestimonialCard;