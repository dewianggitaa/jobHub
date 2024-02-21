import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie';

const JobList = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            console.log(res.data.data)
            setData([...res.data.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleDelete = (event) => {
        let value = event.target.value

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${value}`,
        {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
        ).then((res) => {
            console.log("DELETE DATA SUCCESSFULLY")
            console.log(res)
            navigate('/dashboard/job-list')
        }).catch((err) => {
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
                        <span class="ms-3">Dashboard</span>
                        </a>
                    </li>
                </Link>
                
                <Link to={'/dashboard/job-list'}>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Job List</span>
                        </a>
                    </li>
                </Link>
                
                <Link to={'/dashboard/job-create'}>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Create new Job</span>
                        </a>
                    </li>
                </Link>
            </ul>
        </div>
        </aside>

        <div onClick={closeSidebar} class="py-4 px-10 sm:ml-64 h-screen">
            <div class="overflow-x-auto border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <table class="table-auto border-collapse">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr class="bg-green-400 text-black">
                            <th scope="col" class=" px-6 py-3 border">
                                Job Title
                            </th>
                            <th scope="col" class="px-6 py-3 border">
                                Company
                            </th>
                            <th scope="col" class="px-6 py-3 border">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3 border-spacing-0">
                                Qualification
                            </th>
                            <th scope="col" class="px-6 py-3 border">
                                Type
                            </th>
                            <th scope="col" class="px-6 py-3 border">
                                Tenure
                            </th>
                            <th scope="col" class="px-6 py-3 border">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3 border">
                                Salary
                            </th>
                            <th scope="col" class="px-6 py-3 border">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="align-top">
                        {data != null && data.map((res) => {
                            return(
                                <tr key={res.id} class="font-light">
                                            <th scope="col" class="font-normal text-xs text-left border">
                                                {res.title}
                                            </th>
                                            <th scope="col" class="font-normal text-xs text-left border">
                                                {res.company_name}
                                                {res.company_city}
                                                <img src={res.company_image_url}/>
                                            </th>
                                            <th scope="col" class="font-normal text-xs text-justify border">
                                                {res.job_description}
                                            </th>
                                            <th scope="col" class="font-normal text-xs border">
                                                {res.job_qualification}
                                            </th>
                                            <th scope="col" class="font-normal text-xs border">
                                                {res.job_type}
                                            </th>
                                            <th scope="col" class="px-6 py-3 font-normal text-xs border">
                                                {res.job_tenure}
                                            </th>
                                            <th scope="col" class="px-6 py-3 font-normal text-xs border">
                                                {res.job_status}
                                            </th>
                                            <th scope="col" class="px-6 py-3 font-normal text-xs border">
                                                {res.salary_min} - {res.salary_max}
                                            </th>
                                            <th scope="col" class="px-6 py-3 border">
                                                <Link to={`/dashboard/job-create/${res.id}`}>
                                                    <button value={res.id} class="focus:outline-none bg-yellow hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                                                </Link>
                                                <button onClick={handleDelete} value={res.id} class="focus:outline-none bg-pink hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                            </th>
                                        </tr>
                            )
                        })}
                    </tbody>
                    
                </table>
            </div>
        </div>

        </div>
    )
}

export default JobList