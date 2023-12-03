import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {

    // elements from react hook form 
    const { register, handleSubmit } = useForm();

    // to handle the login form 
    const handleLogin = data => {
        console.log(data);
    };

    return (
        <div className="h-[550px] flex justify-center items-cetner">
            <div className="lg:w-96 shadow-2xl p-7 mt-10">

                <h1 className="text-2xl text-center">Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Email</span></div>
                        <input type="email" {...register("email")} className="input input-bordered w-full" required />
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Password</span></div>
                        <input type="password" {...register("password")} className="input input-bordered w-full" required />
                    </label>

                    <div className="label"><span className="label-text">Forget password?</span></div>

                    {/* submit button of the form */}
                    <input type="submit" value="Submit" className="btn btn-accent w-full mt-10" />

                </form>

                <div className="label-text text-center">New to Doctors Portal? <Link to="/signup" className="text-secondary">Create an account</Link></div>

                <div className="divider">OR</div>

                <div>
                    <button className="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
                </div>

            </div>
        </div>
    );
};

export default Login;