import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {

    // elements from react hook form 
    const {register, handleSubmit, formState: {errors}} = useForm();

    // to handle register form 
    const handleRegister = (data) => {
        console.log(data);
    };

    return (
        <div className="h-[500px] flex justify-center items-center">

            <div className="lg:w-96 shadow-xl p-7 mt-10">
                <h1 className="text-2xl text-center">Sign Up</h1>

                <form onSubmit={handleSubmit(handleRegister)}>

                    {/* name field */}
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Name</span></div>
                        <input type="text" {...register("name", {
                            required: "Name is required"
                        })} 
                        className="input input-bordered w-full" />

                        {errors.name && <p className="text-red-500 text-sm">{errors.name?.message}</p>}
                    </label>

                    {/* email field */}
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Email</span></div>
                        <input type="email" {...register("email", {
                            required: "Email is required"
                        })} 
                        className="input input-bordered w-full" />

                        {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
                    </label>
                    
                    {/* password field */}
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Password</span></div>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/, message: 'Password must be strong'}
                        })} 
                        className="input input-bordered w-full" />

                        {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
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