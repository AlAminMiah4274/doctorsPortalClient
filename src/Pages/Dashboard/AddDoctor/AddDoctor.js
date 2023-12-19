import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    // used react query for loading data from server side 
    const { data: specialties = [] } = useQuery({
        queryKey: ["appointmentSpecialty"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
            const data = await res.json();
            return data;
        }
    });

    const handleAddDoctorForm = data => {

        // to upload the image and get the url for creating an object. Then the object will send to server side 
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);

        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    };

                    fetch(`http://localhost:5000/doctors`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(docData => {
                            if (docData.acknowledged) {
                                toast.success(`${data.name} is added successfully`);

                                // to lead the user to ManageDoctor component 
                                navigate("/dashboard/manageDoctor");
                            }
                        })
                }
            })
    };

    return (
        <div className="lg:ml-14 lg:mt-11">
            <h1 className="text-4xl mb-7">Add a new doctor</h1>

            <div className="lg:w-1/2 p-12 bg-white">

                <form onSubmit={handleSubmit(handleAddDoctorForm)}>

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

                    {/* speciality field */}
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Specialty</span></div>

                        <select {...register("specialty")} className="select select-bordered">
                            {specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)}
                        </select>

                    </label>

                    {/* photo field */}
                    <label className="form-control w-full">
                        <div className="label"><span className="label-text">Photo</span></div>

                        <input type="file" {...register("image", {
                            required: "image is required"
                        })}
                            className="input input-bordered w-full" />

                        {errors.image && <p className="text-red-500 text-sm">{errors.image?.message}</p>}
                    </label>

                    {/* submit button */}
                    <input type="submit" value="Add Doctor" className="btn btn-accent w-full" />

                </form>
            </div>

        </div>
    );
};

export default AddDoctor;

/**
 * three places to store images: 
 * image hosting specialized server - optimizely
 * file system of own server 
 * database  
**/