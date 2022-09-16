import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className=''>
                <h1 className='text-7xl mb-6'>Jobly</h1>
            </div>

            <h3 className='text-2xl mb-6  font-thin'>
                All the jobs in one, convenient place.
            </h3>
            <div className='flex space-x-3'>
                <NavLink exact to='/login' className='no-underline text-white'>
                    <button class='p-2 rounded-full w-32 bg-blue-500 hover:scale-105 hover:bg-blue-600 text-white mb-3 no-underline'>
                        Login
                    </button>
                </NavLink>
                <NavLink exact to='/signup' className='no-underline text-white'>
                    <button className='p-2 rounded-full w-32 bg-blue-500 hover:scale-105 hover:bg-blue-600 mb-3 '>
                        Sign Up
                    </button>
                </NavLink>
            </div>
        </div>
    );
};
