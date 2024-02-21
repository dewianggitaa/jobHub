import React from 'react'
import Image from '../../Image.png'
import {Link} from 'react-router-dom'

const HeroSection = () => {
    return (
        <div id="home" class="place-content-center grid grid-cols-2 justify-between px-10 lg:px-32 md:px-20 bg-primary h-screen">
            <div class="mt-10">
                <div class="text-4xl md:text-7xl lg: text-7xl font-medium">
                    <div>Let's Find</div>
                    <div>Your</div>
                    <div>Dream</div>
                    <div>Job</div>
                </div>

                <Link to={'/Jobs'}>
                    <div>
                        <button class="text-white shadow-black shadow shadow-md bg-yellow focus:ring-4 focus:ring-black font-medium rounded-xl text-xl mt-10 px-5 py-2 focus:outline-none">Get Started</button>
                    </div>
                </Link>
            </div>
            <div>
                <img class="md:w-96" src={Image}/>
            </div>
        </div>
    )
}

export default HeroSection