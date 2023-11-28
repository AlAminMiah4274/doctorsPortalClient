import React from "react";
import flouride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {

    // created an array of data for service card 
    const services = [
        {
            id: 1,
            name: 'Flouride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: flouride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: cavity
        },
        {
            id: 1,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: whitening
        }
    ];

    return (
        <div className="my-10 text-center">

            <h2 className="font-bold text-secondary text-xl">OUR SERVICES</h2>
            <p className="text-4xl">Services We Provide</p>

            {/* sent services data to the service card component as a props */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;