import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {

    // elements from react hook form 
    const {register, handleSubmit} = useForm();

    // to handle register form 
    const handleRegister = (data) => {
        console.log(data);
    };

    return (
        <div className="h-[500px] flex justify-center items-center">

            <div className="lg:w-96 shadow-xl p-7 mt-10">
                <h1 className="text-2xl text-center">Sign Up</h1>

                <form onSubmit={handleSubmit(handleRegister)}>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Name</span></div>
                        <input type="text" {...register("name")} className="input input-bordered w-full" required />
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Email</span></div>
                        <input type="email" {...register("email")} className="input input-bordered w-full" required />
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Password</span></div>
                        <input type="password" {...register("password")} className="input input-bordered w-full" required />
                    </label>

                    <div className="label"><span className="label-text">Forgot password?</span></div>

                    {/* submit button of the form */}
                    <input type="submit" value="Submit" className="btn btn-accent w-full mt-8" />

                </form>

                <p className="label-text text-center">Already have an accoutn? <Link to="/login" className="text-secondary">Please log in</Link></p>

            </div>
        </div>
    );
};

export default Register;