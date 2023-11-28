import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import TakeTreatment from "../TakeTreatment/TakeTreatment";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

const Home = () => {
    return (
        <div className="mx-3">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TakeTreatment></TakeTreatment>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;