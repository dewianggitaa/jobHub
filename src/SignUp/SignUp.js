import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import Cookies from 'js-cookie';


const SignUp = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const saveTokenToCookie = (token) => {
        Cookies.set('token', token, { expires: 365});
    };

    const [input, setInput] = useState({
        name: "",
        image_url: "",
        email: "",
        password: "",
    })

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({...input, [name]: value})
    }

    const handleRegis = (event) => {
        event.preventDefault()
        let {name, image_url, email, password} = input
        console.log(input)

        axios.post("https://dev-example.sanbercloud.com/api/register", 
            {name, image_url, email, password},
        ).then((res) => {
            console.log("REGISTRASI SUKSES")
            console.log(res)
            const token = res.data.token;
            saveTokenToCookie(token);
            navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <div class="flex justify-center items-center pt-20 h-screen bg-gradient-to-r from-pink  to-blue">
                <div class="bg-white w-72 md:w-96 h-86 md:h-96 rounded-xl">
                    <div class="text-center text-3xl md:text-5xl font-semibold pt-3 md:pt-10 pb-3 md:pb-6">Registration</div>
                    <div class="px-10 md:px-16">
                        <div>
                            <div class="md:text-xl">Name</div>
                            <input onChange={handleInput} name='name' value={input.name} class="border rounded-md w-full md:text-xl px-2"/>
                        </div>
                        <div>
                            <div class="pt-2 md:pt-4 md:text-xl">Profile URL</div>
                            <input onChange={handleInput} name='image_url' value={input.image_url} class="border rounded-md w-full md:text-xl px-2"/>
                        </div>
                        <div>
                            <div class="pt-2 md:pt-4 md:text-xl">Email</div>
                            <input onChange={handleInput} name='email' value={input.email} class="border rounded-md w-full md:text-xl px-2"></input>
                        </div>
                        <div>
                            <div class="pt-2 md:pt-4 md:text-xl">Password</div>
                            <input onChange={handleInput} name='password' value={input.password} class="border rounded-md w-full md:text-xl px-2"></input>    
                        </div>
                        <div class="text-center pt-3">
                            <button onClick={handleRegis} type="button" class="text-white bg-blue hover:bg-darkblue focus:ring-4 focus:ring-pink font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
                        </div>                   
                    </div>
                    <div class="flex justify-between pb-4 px-10 text-xs md:px-16 md:text-base">
                        <div>Already have an account??</div> 
                        <Link to={'/login'}>
                            <div>Login</div>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default SignUp