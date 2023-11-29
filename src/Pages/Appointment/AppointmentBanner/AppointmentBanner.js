import React from "react";
import chair from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="hero lg:h-[500px]">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <img src={chair} alt="" className="rounded-lg lg:w-1/2 shadow-2xl" />

                <div className="w-1/2 flex justify-center">
                    <DayPicker
                        mode="single"  // mode can be changed on the basis of the date of the range 
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>

            </div>
        </div>
    );
};

export default AppointmentBanner;