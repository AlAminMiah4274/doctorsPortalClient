import React from "react";

const ServiceCard = ({service}) => {

    // destructured the object got from the services component 
    const {name, description, image} = service;

    return (
        <div className="card shadow-xl">

            <figure>
                <img src={image} alt="" className="rounded-xl" />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default ServiceCard;