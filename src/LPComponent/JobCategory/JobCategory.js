import React from 'react'
import { Link } from 'react-router-dom'

const JobCategory = () => {
    return (
        <div class="grid grid-flow-row bg-yellow place-content-center h-screen px-10 lg:px-32 md:px-20">
            <div class="text-xl md:text-5xl text-center font-semibold text-black">Get to Know some Job Categories</div>
            <div class="mt-7 md:mt-20 grid grid-cols-1 md:grid-cols-2 p-4 gap-5 md:gap-10">
                <div class="bg-black text-white rounded-md text-center md:text-xl md:p-4">Software Developer</div>
                <div class="bg-primary rounded-md text-center md:text-xl md:p-4">Website Developer</div>
                <div class="bg-black text-white md:bg-primary md:text-black rounded-md text-center md:text-xl md:p-4">Data Analist</div>
                <div class="bg-primary md:bg-black md:text-white rounded-md text-center md:text-xl md:p-4">AI Specialist</div>
                <div class="bg-black text-white rounded-md text-center md:text-xl md:p-4">UI/UX Designer</div>
                <div class="bg-primary rounded-md text-center md:text-xl md:p-4">System and Networking</div>
            </div>
        </div>
    )
}

export default JobCategory