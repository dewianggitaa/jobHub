import axios from 'axios'
import {React, useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import { useNavigate, Link } from 'react-router-dom'
import UserContext from '../UserContext';

const SignIn = () => {
    const navigate = useNavigate()
    const { loginUser } = useContext(UserContext);
    const [input, setInput] = useState({
        email: "",
        password : ""
    })

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({...input, [name]: value})
    }

    const handleLogin = (event) => {
        event.preventDefault()

        let { email, password } = input

        axios.post("https://dev-example.sanbercloud.com/api/login", {email, password})
        .then((res) => {
            console.log("LOGIN SUKSES")
            console.log(res)    
            
            const {token, user} = res.data
            Cookies.set('token', token, {expires: 365})
            loginUser(user)
            navigate('/Dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div class="flex justify-center items-center pt-20 h-screen bg-gradient-to-r from-blue  to-pink">
            <div class="bg-white w-72 md:w-96 h-80 md:h-96 rounded-xl">
                <div class="text-center text-3xl md:text-5xl font-semibold pt-3 md:pt-10 pb-3 md:pb-6">Login</div>
                <div class="px-10 md:px-16">
                    <div>
                        <div class="md:text-xl">Email</div>
                        <input onChange={handleChange} value={input.email} type='text' name="email" class="border rounded-md w-full md:text-xl px-2"></input>
                    </div>
                    <div class="pt-2 md:pt-4">
                        <div class="md:text-xl">Password</div>
                        <input onChange={handleChange} value={input.password} type='password' name="password" class="border rounded-md w-full md:text-xl"></input>    
                    </div>
                    <div class="text-xs pt-2 md:text-base">Forgot password</div>
                    <div class="text-center pt-4">
                        <button onClick={handleLogin} class="text-white bg-blue hover:bg-black focus:ring-4 focus:ring-pink font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">Login</button>
                    </div>                   
                </div>
                <div class="flex justify-between px-10 text-xs md:px-16 md:text-base">
                    <div>Belum punya akun?</div> 
                    <Link to={'/signup'}>
                        <div>Registrasi</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn