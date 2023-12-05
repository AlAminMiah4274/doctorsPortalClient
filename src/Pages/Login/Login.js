import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    // elements from react hook form 
    const { register, formState: { errors }, handleSubmit } = useForm();

    // destructured auth elements 
    const { userLogIn } = useContext(AuthContext);

    // to show log in related error 
    const [loginError, setLoginError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // to handle the login form 
    const handleLogin = data => {

        // to remove the error text from the UI
        setLoginError("");

        // user log in function from auth 
        userLogIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                toast.success("Log in confirmed");

                navigate(from, {replace: true});
            })
            .catch(err => {
                // to send the error to the state
                setLoginError(err.message);
            })
    };

    return (
        <div className="flex justify-center items-cetner">
            <div className="lg:w-96 shadow-2xl p-7 mt-10">

                <h1 className="text-2xl text-center">Login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Email</span></div>
                        <input type="email" {...register("email", {
                            required: "Email is required"
                        })}
                            className="input input-bordered w-full" />

                        {errors?.email && <p className="text-red-500 text-sm">{errors?.email?.message}</p>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Password</span></div>
                        <input type="password" {...register("password", {

                            // for required the field 
                            required: "Password is required",
                        })}
                            className="input input-bordered w-full" />

                        {errors?.password && <p className="text-red-500 text-sm">{errors?.password?.message}</p>}
                    </label>

                    <div className="label"><span className="label-text">Forget password?</span></div>

                    {
                        loginError && <p className="text-red-600 text-sm">{loginError}</p>
                    }

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