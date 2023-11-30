import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ option }) => {

    const { name, slots } = option;

    return (
        <div className="card shadow-2xl">

            <div className="card-body">

                <h2 className="card-title justify-center">{name}</h2>

                <p className="text-center">
                    {
                        slots.length > 0 ?
                        <select className="select select-bordered">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>
                        :
                        'Try Another Day'
                    }
                </p>
                
                <p className="text-center">{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>

                <div className="card-actions justify-center mt-10">
                    <PrimaryButton>Book Appoinment</PrimaryButton>
                </div>

            </div>

        </div>
    );
};

export default AppointmentOption;