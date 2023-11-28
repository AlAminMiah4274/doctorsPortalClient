import React from "react";
import bgImg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
    return (
        <div 
        style={{backgroundImage: `url(${bgImg})`}}
        className="hero sm:h-full lg:h-[500px]">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={`${chair}`} alt="" className="rounded-lg sm:w-full lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your Smile Starts <br/> Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default Banner;