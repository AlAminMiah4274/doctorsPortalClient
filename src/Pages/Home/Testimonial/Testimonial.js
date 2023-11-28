import React from "react";
import quote from "../../../assets/icons/quote.svg";
import paul from "../../../assets/images/people1.png";
import daniels from "../../../assets/images/people2.png";
import kendra from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {

    const speeches = [
        {
            id: 1,
            name: 'De Paul',
            statement: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Florida',
            image: paul
        },
        {
            id: 2,
            name: 'Kendra Sundarland',
            statement: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Los Angels',
            image: kendra
        },
        {
            id: 3,
            name: 'Dani Daniels',
            statement: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Les Vagus',
            image: daniels
        },
    ];

    return (
        <div className="my-10">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold text-secondary">Testimonial</h1>
                    <h1 className="text-4xl">What Our Patients Says</h1>
                </div>

                <img src={quote} alt="" className="h-36" />
            </div>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    speeches.map(speech => <TestimonialCard
                        key={speech.id}
                        speech={speech}
                    ></TestimonialCard>)
                }
            </div>

        </div>
    );
};

export default Testimonial;