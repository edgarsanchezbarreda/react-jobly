import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SearchForm } from './SearchForm';
import { JobCard } from './JobCard';

export const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    const BASE_API_URL = 'http://localhost:3001';

    useEffect(() => {
        const getJobs = async (req, res, next) => {
            try {
                let res = await axios.get(`${BASE_API_URL}/jobs`);
                setJobs(res.data.jobs);
            } catch (err) {
                return next(err);
            }
        };
        getJobs();
    }, []);

    const handleFilterSearch = async searchFormVal => {
        let res = searchFormVal
            ? await axios.get(`${BASE_API_URL}/jobs?title=${searchFormVal}`)
            : await axios.get(`${BASE_API_URL}/jobs`);
        setJobs(res.data.jobs);
    };

    return (
        <div>
            {/* Search Form Filtering via job title */}
            <SearchForm handleFilterSearch={handleFilterSearch} />
            {/* Job Cards */}
            <div className='flex flex-col items-center mx-10'>
                {jobs.length > 0 ? (
                    jobs.map(job => (
                        <JobCard
                            id={job.id}
                            title={job.title}
                            salary={job.salary}
                            equity={job.equity}
                            company_handle={job.company_handle}
                            key={job.id}
                        />
                    ))
                ) : (
                    <p>Sorry, no results were found!</p>
                )}
            </div>
        </div>
    );
};
