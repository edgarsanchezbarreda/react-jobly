import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CompanyCard } from './CompanyCard';
import { SearchForm } from './SearchForm';

export const CompanyList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    const BASE_API_URL = 'http://localhost:3001';
    useEffect(() => {
        const getCompanies = async (req, res, next) => {
            try {
                let comps = await axios.get(`${BASE_API_URL}/companies`);
                setCompanies(comps.data.companies);
                setIsLoading(false);
            } catch (err) {
                return next(err);
            }
        };
        getCompanies();
    }, []);
    console.log(companies);

    return (
        <div>
            <SearchForm />
            {/* Company Cards */}
            <div className='flex flex-col items-center mx-10'>
                {companies.map(company => (
                    <CompanyCard
                        name={company.name}
                        description={company.description}
                        logoUrl={company.logoUrl}
                        key={company.handle}
                    />
                ))}
            </div>
        </div>
    );
};
