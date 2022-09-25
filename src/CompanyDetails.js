import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { JobCard } from './JobCard';

export const CompanyDetails = () => {
    const [company, setCompany] = useState([]);

    let location = useLocation();
    let handle = location.pathname.slice(11);
    const BASE_API_URL = 'http://localhost:3001';

    useEffect(() => {
        const getCompany = async (req, res, next) => {
            try {
                let company = await axios.get(
                    `${BASE_API_URL}/companies/${handle}`
                );

                setCompany(company.data.company);
            } catch (err) {
                return next(err);
            }
        };
        getCompany();
    }, []);
    console.log(company);

    return (
        <div className='CompanyDetails'>
            <div className='flex flex-col mx-6 md:mx-auto md:max-w-5xl w-full my-4 min-w-fit'>
                <h1 className='mb-4'>{company.name}</h1>
                <p>{company.description}</p>
            </div>

            {company.jobs?.map(job => (
                <JobCard
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                />
                // <div className='border border-black'>
                //     <p>{job.title}</p>
                //     <p>Salary: {job.salary}</p>
                //     <p>Equity: {job.equity}</p>
                // </div>
            ))}
        </div>
    );
};
