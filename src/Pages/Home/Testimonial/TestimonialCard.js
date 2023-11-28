import React from "react";

const TestimonialCard = ({ speech }) => {

    // destructured the speech object got from the testimonial component 
    const { name, statement, image, address } = speech;

    return (
        <div className="card shadow-2xl mt-20">
            <div className="card-body">

                {/* patient reviews */}
                <p>{statement}</p>

                <div className="card-actions flex items-center mt-5">
                    
                    {/* patient image */}
                    <img src={image} alt="" className="rounded-xl h-16 border-4 rounded-full border-secondary" />

                    {/* patient name and address */}
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