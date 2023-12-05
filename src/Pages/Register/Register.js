import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

    // elements from react hook form 
    const { register, handleSubmit, formState: { errors } } = useForm();

    // destructured auth elements 
    const { createUser, userProfileUpdate } = useContext(AuthContext);

    // to show sign up error in the UI 
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // to handle register form 
    const handleRegister = (data) => {

        // to remove the error text form the UI 
        setSignUpError('');

        // user account creating function from auth 
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name
                };

                // user profile updating function from auth 
                userProfileUpdate(userInfo)
                    .then(() => { })
                    .catch(err => console.error(err))

                toast.success("Registration confirmed");

                navigate(from, {replace: true});
            })
            .catch(err => {
                // to get the error message 
                setSignUpError(err.message);
            })
    };

    return (
        <div className="flex justify-center items-center">

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
                            pattern: {
                                value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/,
                                message: 'Password must be strong'
                            }
                        })}
                            className="input input-bordered w-full" />

                        {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
                    </label>

                    <div className="label"><span className="label-text">Forgot password?</span></div>

                    {/* sign up error message */}
                    {
                        signUpError && <p className="text-red-500 text-sm">{signUpError}</p>
                    }

                    {/* submit button of the form */}
                    <input type="submit" value="Submit" className="btn btn-accent w-full mt-8" />

                </form>

                <p className="label-text text-center">
                    Already have an accoutn? <Link to="/login" className="text-secondary">Please log in</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;