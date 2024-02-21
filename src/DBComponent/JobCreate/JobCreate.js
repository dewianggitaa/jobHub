import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const JobCreate = () => {
    const {id} = useParams();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [input, setInput] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: "",
        salary_max: ""
    })
    const [isUpdate, setIsUpdate] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const response = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
                setInput({
                    title: response.data.title,
                    job_description: response.data.job_description,
                    job_qualification: response.data.job_qualification,
                    job_type: response.data.job_type,
                    job_tenure: response.data.job_tenure,
                    job_status: response.data.job_status,
                    company_name: response.data.company_name,
                    company_image_url: response.data.company_image_url,
                    company_city: response.data.company_city,
                    salary_min: response.data.salary_min,
                    salary_max: response.data.salary_max
                })
                setIsUpdate(true)
                console.log("get data success")
                console.log(input)
            } catch(err){
                console.log(err)
            }
        }

        fetchJobs();
    }, [id])

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({...input, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(isUpdate){
            console.log("DATA UPDATE SUCCESSFULLY")
            updateToAPI();
        }else{
            console.log("CREATE DATA SUCCESSFULLY")
            postToAPI()
        }
    }

    const postToAPI = () => {
        axios.post("https://dev-example.sanbercloud.com/api/job-vacancy",
        input,
        {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
            console.log(res)
            navigate('/dashboard/job-list')
        }).catch((err) => {
            console.log(err)
        })
    }

    const updateToAPI = () => {
        axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, input,
        {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
            console.log(res)
            navigate('/dashboard/job-list')
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <div class="py-20">

        <button onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" aria-expanded={isSidebarOpen} type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
        </button>

        <aside id="default-sidebar" class={`py-10 bg-white fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? '' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
        <div class="h-full px-10 py-20 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <Link to={'/dashboard'}>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span class="ms-3">Dashboard</span>
                        </a>
                    </li>
                </Link>
                
                <Link to={'/dashboard/job-list'}>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Job List</span>
                        </a>
                    </li>
                </Link>
                
                <Link to={'/dashboard/job-create'}>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Create new Job</span>
                        </a>
                    </li>
                </Link>
            </ul>
        </div>
        </aside>

        <div onClick={closeSidebar} class="py-10 px-5 sm:ml-64 h-screen">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div class="text-2xl ">Create Data</div>
                <div class="grid mb-5">
                    <label>Job Title</label>
                    <input onChange={handleInput} name='title' value={input.title} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Job Description</label>
                    <input onChange={handleInput} name='job_description' value={input.job_description} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Job Qualification</label>
                    <input onChange={handleInput} name='job_qualification' value={input.job_qualification} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Job Type</label>
                    <input onChange={handleInput} name='job_type' value={input.job_type} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Job Tenure</label>
                    <input onChange={handleInput} name='job_tenure' value={input.job_tenure} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Job Status</label>
                    <input onChange={handleInput} name='job_status' value={input.job_status} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Company Name</label>
                    <input onChange={handleInput} name='company_name' value={input.company_name} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Company Image URL</label>
                    <input onChange={handleInput} name='company_image_url' value={input.company_image_url} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Company City</label>
                    <input onChange={handleInput} name='company_city' value={input.company_city} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Salary Min</label>
                    <input type='number' onChange={handleInput} name='salary_min' value={input.salary_min} class="border"/>
                </div>
                <div class="grid mb-5">
                    <label>Salary Max</label>
                    <input type='number' onChange={handleInput} name='salary_max' value={input.salary_max} class="border"/>
                </div>
                <div class="grid mb-5">
                    <button onClick={handleSubmit} class="px-4 py-2 rounded-lg bg-blue">Submit</button>
                </div>
            </div>
        </div>

        </div>
    )
}

export default JobCreate