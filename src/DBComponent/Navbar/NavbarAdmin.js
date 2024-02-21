import React, { useContext, useState } from 'react';
import Logo from '../../Logo.png';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';

const NavbarAdmin = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        Cookies.remove('token');

        navigate('/');
    };

    return (
        <div className="relative z-50">
            <div className="flex fixed justify-between bg-yellow w-full py-4 md:py-6 lg:py-4 px-6 md:px-14 z-50">
                <Link to={'/'}>
                    <div className="flex mt-2">
                        <img className="h-7 md:h-10 lg:h-8" src={Logo} alt="Job Hub Logo" />
                        <div className="ml-2 text-2xl md:text-4xl lg:text-2xl text-black font-sans font-bold">Job Hub</div>
                    </div>
                </Link>

                <div className="flex gap-6">
                    <div>
                        {!Cookies.get('token') ? (
                            <Link to={'/login'}>
                                {/* ... (content for login link) */}
                            </Link>
                        ) : (
                            <button
                                id="dropdownDefaultButton"
                                onClick={toggleDropdown}
                                className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                                type="button"
                            >
                                <img class="w-12 h-12 mr-5 rounded-full" src={user.image_url}/>
                                {user.name}{' '}
                                <svg
                                    className={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>                        )}
                    </div>
                </div>



                {isDropdownOpen && (
                    <div
                        id="dropdown"
                        className={`absolute top-full right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link to={'/dashboard/user-profile'}>
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Profile
                                    </a>
                                </Link>
                                
                            </li>
                            <li>
                                <div onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Logout
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarAdmin;
