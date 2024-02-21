import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const loginUser = (userData) => {
        setUser(userData)
    }

    const logoutUser = () =>{
        setUser(null)
    }

    return(
        <UserContext.Provider value={{user, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;