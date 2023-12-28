import { useEffect, useState } from "react";

const useToken = email => {

    const [token, setToken] = useState('');

    useEffect(() => {

        if (email) {
            fetch(`https://doctors-portal-server-ashen-omega.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {

                    if(data.accessToken){
                        // to save the token in local storage
                        localStorage.setItem("accessToken", data.accessToken);

                        // to store the token in state
                        setToken(data.accessToken);
                    };
                })
        };

    }, [email]);

    return [token];

};

export default useToken;