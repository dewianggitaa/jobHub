import React from 'react'
import {Google, Microsoft, Adobe, Amazon, Facebook, Samsung, Sony, Tesla} from '../../partners'

const Partner = () => {
    return (
        <div class="grid grid-flow-row bg-primary place-content-center h-screen px-10 lg:px-32 md:px-20">
            <div class='text-4xl md:text-5xl font-semibold text-center'>Our Partners</div>
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 m-16'>
                <img class='w-32 md:w-52' src={Google}/>
                <img class='w-32 md:w-52' src={Microsoft}/>
                <img class='w-32 md:w-52' src={Adobe}/>
                <img class='w-32 md:w-52' src={Amazon}/>
                <img class='w-32 md:w-52' src={Sony}/>
                <img class='w-32 md:w-52' src={Samsung}/>
                <img class='w-32 md:w-52' src={Facebook}/>
                <img class='w-32 md:w-52' src={Tesla}/>
            </div>
        </div>
    )
}

export default Partner