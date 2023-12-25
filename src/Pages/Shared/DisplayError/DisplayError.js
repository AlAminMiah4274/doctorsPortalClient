import React, { useContext } from "react";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const DisplayError = () => {

    const { userLogOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleUserLogOut = () => {
        userLogOut()
            .then(() => {
                navigate("/login")
            })
            .catch(err => console.log(err))
    };

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <p>Something went wrong!!!</p>
                <p>{error.statusText || error.message}</p>
                <button onClick={handleUserLogOut}>Please log out and log back in</button>
            </div>
        );
    }
};

export default DisplayError;