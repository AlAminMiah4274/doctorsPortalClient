import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const DisplayError = () => {

    const { userLogOut } = useContext(AuthContext);
    const error = useRouteError();

    const handleUserLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <p>Something went wrong!!!</p>
            <p>{error.statusText || error.message}</p>
            <h4>Please <button onClick={handleUserLogOut}>Log out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;