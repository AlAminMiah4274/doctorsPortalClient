import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../components/Loading/Loading";
import toast from "react-hot-toast";

const ManageDoctor = () => {

    // used try catch for catching the error 
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`);
                const data = await res.json();
                return data;
            }
            catch (err) {
                console.log(err);
            }
        }
    });

    // to show the spinner during load time 
    if (isLoading) {
        return <Loading></Loading>
    }

    // to send the delete request to server side 
    const handleDoctorDeleting = (id) => {

        const agree = window.confirm("Do you want to remove the doctor");

        if (agree) {

            fetch(`http://localhost:5000/doctors/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {

                    if(data.acknowledged){
                        toast.success("Successfully removed");
                        refetch();
                    }
                })

        }
    };

    return (
        <div className="p-7">

            <h1 className="text-4xl mb-6">Manage Doctors</h1>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead className="bg-gray-200">
                        <tr>
                            <th>Qty</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <td>{i + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-circle w-12 h-12">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <th><button
                                    onClick={() => handleDoctorDeleting(doctor._id)}
                                    className="btn btn-error btn-xs text-white">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;