import React from 'react';
import { NavLink } from 'react-router-dom';

export const SearchForm = () => {
    return (
        <div className='flex items-center mx-10 mt-8'>
            <form
                action=''
                className='flex mx-6 md:mx-auto md:max-w-5xl w-full my-4 min-w-fit'
            >
                <input
                    className='shrink-0 grow p-2 border border-black rounded-lg w-2/3'
                    type='text'
                    placeholder='Enter search term...'
                />
                <NavLink exact to='/signup' className='no-underline text-white'>
                    <button className='p-2 rounded w-20 bg-blue-500 hover:scale-105 hover:bg-blue-600 mb-3 right-2 h-full'>
                        Submit
                    </button>
                </NavLink>
            </form>
        </div>
    );
};
