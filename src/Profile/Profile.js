import React, { useContext } from 'react'
import UserContext from '../UserContext';


const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <div className='flex py-60 px-32 justify-center place-items-center'>
                <div>
                    <img className='w-36 md:w-40' src={user.image_url}/>
                </div>
                <div>
                    <div className='md:text-2xl font-semibold'>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.password}</div>
                </div>
            </div>
        </div>
    )
}

export default Profile