import React from 'react'
import { Navbar, HeroSection, About, JobCategory, Partner, Footer } from "../LPComponent";

const LandingPage = () => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <About/>
            <JobCategory/>
            <Partner/>
            <Footer/>
        </>
    )
}

export default LandingPage