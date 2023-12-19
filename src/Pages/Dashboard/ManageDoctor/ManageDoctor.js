import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../../components/Loading/Loading";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctor = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);


    // used try catch for catching the error 
    const { data: doctors, isLoading } = useQuery({
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
    };

    // to close the modal if the admin don't want to remove the doctor 
    const closeModal = () => {
        setDeletingDoctor(null);
    };

    // to delete/remove the doctor 
    const handleDeleteDoctor = (doctor) => {
        console.log(doctor);
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
                                    onClick={() => document.getElementById('confirmationModal').showModal()}
                                    onMouseEnter={() => setDeletingDoctor(doctor)}
                                    className="btn btn-error btn-xs text-white">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure to delete the doctor?`}
                    message={`If doctor ${deletingDoctor.name} is deleted, it can't be undone!`}
                    modalData={deletingDoctor}
                    successAction={handleDeleteDoctor}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }

        </div>
    );
};

export default ManageDoctor;