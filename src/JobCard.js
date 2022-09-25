import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const JobCard = ({ id, title, salary, equity, company_handle }) => {
    const [buttonText, setButtonText] = useState('APPLY');

    const handleApply = evt => {
        if (buttonText === 'APPLY') {
            evt.currentTarget.classList.add(
                'bg-red-200',
                'hover:bg-red-200',
                'line-through',
                'transition',
                'ease-in-out'
            );
            setButtonText('APPLIED');
        } else {
            evt.currentTarget.classList.remove(
                'bg-red-200',
                'hover:bg-red-200',
                'line-through',
                'transition',
                'ease-in-out'
            );
            setButtonText('APPLY');
        }
    };

    return (
        // Job Card Container

        <div className='flex border border-black p-2 mx-6 md:mx-auto  md:max-w-5xl md:w-full my-4 rounded-2xl drop-shadow-xl text-black no-underline transition ease-in-out  hover:scale-102 hover:shadow-lg duration-300'>
            {/* Content Box */}
            <div className='flex flex-col p-4 w-full '>
                <h2 className='font-sans-serif text-xl font-medium text-left'>
                    {title}
                </h2>
                <p className=' my-2 text-xs leading-5 tracking-wide  text-left'>
                    Salary: {salary}
                </p>
                <p className=' my-2 text-xs leading-5 tracking-wide  text-left'>
                    Equity: {equity}
                </p>
            </div>

            {/* Logo */}
            <div className='p-4 w-36 ml-auto relative'>
                <button
                    onClick={handleApply}
                    className='bg-red-600 text-white p-2 text-bold rounded-md w-300 h-25 absolute bottom-4 right-6  transition ease-in-out hover:scale-105 hover:bg-red-700 duration-200'
                >
                    {buttonText}
                </button>
            </div>
            {/* <div className='p-4 w-36 ml-auto relative'>
                {logoUrl ? (
                    <img
                        src={logoUrl}
                        alt='Company Logo'
                        className='w-10 h-10 absolute top-4 right-6'
                    />
                ) : null}
            </div> */}
        </div>
    );
};
