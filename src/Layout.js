import React from "react"
import Navbar from "./LPComponent/Navbar/Navbar"

const Layout = (props) => {

    return(
        <>
            <Navbar />
            {props.children}
        </>
    )

}

export default Layout