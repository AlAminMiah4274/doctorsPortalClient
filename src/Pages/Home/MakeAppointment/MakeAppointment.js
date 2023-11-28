import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appoinment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
    return (
        <section style={{backgroundImage: `url(${appoinment})`}} className="lg:mt-40">

            <div className="hero">
                <div className="hero-content p-10 text-white flex-col lg:flex-row">

                    <img src={doctor} alt="" className="-mt-32 -mb-10 hidden lg:block w-1/2" />

                    <div>
                        <p className="font-bold text-secondary text-xl mb-5">Appoinment</p>
                        <h1 className="text-4xl font-semibold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appoinment</PrimaryButton>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;