import React from "react";
import img1 from "../../../assets/icons/clock.svg";
import img2 from "../../../assets/icons/marker.svg";
import img3 from "../../../assets/icons/phone.svg";
import AboutCard from "./AboutCard";

const About = () => {

    const aboutInformations = [
        {
            _id: 1011,
            name: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: img1,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            _id: 1012,
            name: 'Visit Our Location',
            description: 'Brooklyn, NY 10036, United States',
            icon: img2,
            bgColor: 'bg-accent'
        },
        {
            _id: 1013,
            name: 'Contact Us Now',
            description: '+000 123 456789',
            icon: img3,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
    ];

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {aboutInformations.map(aboutInfo => <AboutCard
            key={aboutInfo._id}
            aboutInfo={aboutInfo}
            ></AboutCard>)}
        </div>
    );
};

export default About;