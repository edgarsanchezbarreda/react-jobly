import React, { useState } from 'react';

export const CompanyCard = ({ name, description, logoUrl }) => {
    return (
        // Card Container
        <div className='flex border border-black p-2 mx-6 md:mx-auto  md:max-w-5xl md:w-full my-4 rounded-2xl drop-shadow-xl'>
            {/* Content Box */}
            <div className='flex flex-col p-4 w-full'>
                <h2 className='font-sans-serif text-xl font-medium text-left'>
                    {name}
                </h2>
                <p className=' my-4 text-xs leading-5 tracking-wide  text-left'>
                    {description}
                </p>
            </div>
            {/* Logo */}

            <div className='p-4 w-36 ml-auto relative'>
                {logoUrl ? (
                    <img
                        src={logoUrl}
                        alt='Company Logo'
                        className='w-10 h-10 absolute top-4 right-6'
                    />
                ) : null}
            </div>
        </div>
    );
};
