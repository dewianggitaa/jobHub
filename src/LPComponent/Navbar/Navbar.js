import React from 'react'
import Logo from '../../Logo.png'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div class="flex fixed justify-between bg-primary w-full py-4 md:py-6 lg:py-4 px-10 md:px-14 z-50">
            <Link to={'/'}>
                <div class="flex mt-2">
                    <img class="h-7 md:h-10 lg:h-8" src={Logo}/>
                    <div class="ml-2 text-2xl md:text-4xl lg:text-2xl text-black font-sans font-bold">Job Hub</div>
                </div>
            </Link>

            <div class="flex gap-6">
                {/* <div class="mt-3 font-bold">
                    <Link to={'/Jobs'}>
                        Jobs
                    </Link>
                </div> */}

                <div>
                    {!Cookies.get('token') &&
                        <Link to={'/login'}>
                            <button class="text-white bg-black hover:bg-yellow focus:ring-4 focus:ring-black font-medium rounded-xl lg:text-sm md:text-xl px-5 py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Login</button>
                        </Link>  
                    }{Cookies.get('token') && 
                        <button onClick={() => {
                            Cookies.remove('token') 
                            navigate('/login')}} 
                            class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-yellow font-medium rounded-xl text-sm px-5 py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
                        >Login</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar