import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from './auth/UserContext';

export const Home = () => {
    const { currentUser } = useContext(UserContext);
    console.debug('Homepage', 'currentUser=', currentUser);

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className=''>
                <h1 className='text-7xl mb-6'>Jobly</h1>
            </div>

            <h3 className='text-2xl mb-6  font-thin'>
                All the jobs in one, convenient place.
            </h3>
            {currentUser ? (
                <h2 className='text-blue-500 font-light'>
                    Welcome Back,{' '}
                    {currentUser.firstName || currentUser.username}!
                </h2>
            ) : (
                <div className='flex space-x-3'>
                    <NavLink to='/login' className='no-underline text-white'>
                        <button className='p-2 rounded-full w-32 bg-blue-500 hover:scale-105 hover:bg-blue-600 text-white mb-3 no-underline transition ease-in-out duration-200'>
                            Login
                        </button>
                    </NavLink>
                    <NavLink to='/signup' className='no-underline text-white'>
                        <button className='p-2 rounded-full w-32 bg-blue-500 hover:scale-105 hover:bg-blue-600 mb-3 transition ease-in-out duration-200'>
                            Sign Up
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );
};
