import React from "react";

const ConfirmationModal = ({title, message, closeModal, modalData, successAction}) => {
    return (
        <dialog id="confirmationModal" className="modal">
            <div className="modal-box">

                <h3 className="font-bold text-xl text-red-500">{title}</h3>
                <p className="py-4">{message}</p>

                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => successAction(modalData)} className="btn">Yes</button>
                    </form>
                    <button onClick={closeModal} className="btn">No</button>
                </div>

            </div>
        </dialog>
    );
};

export default ConfirmationModal;