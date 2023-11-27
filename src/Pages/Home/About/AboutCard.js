import React from "react";

const AboutCard = ({ aboutInfo }) => {

    console.log(aboutInfo);
    const { name, description, bgColor, icon } = aboutInfo;

    return (
        <div className={`card px-6 shadow-xl ${bgColor} text-white`}>

            <div className="flex items-center">
                <figure>
                    <img src={icon} alt="Shoes" className="rounded-xl" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default AboutCard;