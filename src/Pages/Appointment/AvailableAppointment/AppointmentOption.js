import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ option }) => {

    const { name, slots } = option;

    return (
        <div className="card shadow-2xl">

            <div className="card-body">

                <h2 className="card-title justify-center">{name}</h2>
                <p className="text-center">
                    <select className="select select-bordered">
                        {slots.map(slot => <option value={slot}>{slot}</option>)}
                    </select>
                </p>
                <p className="text-center">{slots.length} Spaces Available</p>

                <div className="card-actions justify-center mt-10">
                    <PrimaryButton>Book Appoinment</PrimaryButton>
                </div>

            </div>

        </div>
    );
};

export default AppointmentOption;