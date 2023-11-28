import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import TakeTreatment from "../TakeTreatment/TakeTreatment";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div className="mx-3">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TakeTreatment></TakeTreatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;