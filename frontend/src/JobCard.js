import React, { useState, useContext, useEffect } from 'react';

import UserContext from './auth/UserContext';

export const JobCard = ({ id, title, salary, equity }) => {
    const [buttonText, setButtonText] = useState('APPLY');
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    React.useEffect(
        function updateAppliedStatus() {
            console.debug('JobCard useEffect updateAppliedStatus', 'id=', id);

            setApplied(hasAppliedToJob(id));
        },
        [id, hasAppliedToJob]
    );

    const applyStyles =
        'bg-red-600 text-white p-2 text-bold rounded-md w-300 h-25 absolute bottom-4 right-6  transition ease-in-out hover:scale-105 hover:bg-red-700 duration-200';

    const appliedStyles =
        'bg-red-200 text-white p-2 text-bold rounded-md w-300 h-25 absolute bottom-4 right-6  transition ease-in-out hover:scale-105 hover:bg-red-200 duration-200 line-through';

    const handleApply = evt => {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    };

    return (
        // Job Card Container

        <div className='flex border border-black p-2 mx-6 md:mx-auto  md:max-w-5xl md:w-full my-4 rounded-2xl drop-shadow-xl text-black no-underline transition ease-in-out  hover:scale-102 hover:shadow-lg duration-300'>
            {' '}
            {applied}
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
                    className={applied ? appliedStyles : applyStyles}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};
