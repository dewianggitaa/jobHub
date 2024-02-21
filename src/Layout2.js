import React from 'react'
import NavbarAdmin from './DBComponent/Navbar/NavbarAdmin'

const Layout2 = (props) => {
    return (
        <>
            <NavbarAdmin/>
            {props.children}
        </>
    )
}

export default Layout2