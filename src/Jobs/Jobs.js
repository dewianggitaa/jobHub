import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Jobs = () => {
    const [data, setData] = useState()
    const [titleFilter, setTitleFilter] = useState("")
    const [cityFilter, setCityFilter] = useState("")
    const [companyNameFilter, setCompanyNameFilter] = useState("")

    const handleTitle = (event) => {
        let value = event.target.value
        setTitleFilter(value)
    }

    const handleCity = (event) => {
        let value = event.target.value
        setCityFilter(value)
    }

    const handleCompanyName = (event) => {
        let value = event.target.value
        setCompanyNameFilter(value)
    }

    useEffect(() => { 
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            console.log(res.data)
            setData([...res.data.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const filteredData = data && data.filter((res) => {
        return (
            res.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            res.company_city.toLowerCase().includes(cityFilter.toLowerCase()) &&
            res.company_name.toLowerCase().includes(companyNameFilter.toLowerCase())
        );
    });

    return (
        <div class="pt-24 md:pt-36 pb-10 px-16">
            <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
                <form class="flex items-center mb-8">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input onChange={handleTitle} name="title" value={titleFilter} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by job title..." required/>
                    </div>
                </form> 

                <form class="flex items-center mb-8">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input onChange={handleCity} name="company_city" value={cityFilter} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by city..." required/>
                    </div>
                </form>

                <form class="flex items-center mb-8">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input onChange={handleCompanyName} name="salary_min" value={companyNameFilter} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by company name" required/>
                    </div>
                </form>
                
            </div>
            


            {data!= null && filteredData.map((res) => {
                return(
                    <>
                        <div key={res.id} class="mb-10">
                            <div class="flex">
                                <img class="w-28 h-28" src={res.company_image_url}/>
                                <div class="ml-5">
                                    <div class="font-semibold">{res.title}</div>
                                    <div>{res.company_name}</div>
                                    <div class="text-sm italic">{res.company_city}</div>
                                    <button type="button" class="mt-3 w-32 text-white bg-pink hover:bg-primary hover:text-pink focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</button>
                                </div>    
                            </div>
                            <hr class="border-black mt-3"/>
                            <div>
                            </div>
                        </div>

                    </>
                )
            })}
        </div>
    )
}

export default Jobs