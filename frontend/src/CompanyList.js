import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CompanyCard } from './CompanyCard';
import { SearchForm } from './SearchForm';
import { NavLink } from 'react-router-dom';

export const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    const BASE_API_URL = 'http://localhost:3001';
    useEffect(() => {
        const getCompanies = async (req, res, next) => {
            try {
                let comps = await axios.get(`${BASE_API_URL}/companies`);
                setCompanies(comps.data.companies);
            } catch (err) {
                return next(err);
            }
        };
        getCompanies();
    }, []);

    const handleFilterSearch = async searchFormVal => {
        let comps = searchFormVal
            ? await axios.get(`${BASE_API_URL}/companies?name=${searchFormVal}`)
            : await axios.get(`${BASE_API_URL}/companies`);

        setCompanies(comps.data.companies);
    };

    return (
        <div>
            {/* Company Search form for filtering */}
            <SearchForm handleFilterSearch={handleFilterSearch} />
            {/* Company Cards */}
            <div className='flex flex-col items-center mx-10'>
                {companies.length > 0 ? (
                    companies.map(company => (
                        <CompanyCard
                            name={company.name}
                            handle={company.handle}
                            description={company.description}
                            logoUrl={company.logoUrl}
                            key={company.handle}
                        />
                    ))
                ) : (
                    <p>Sorry, no results were found!</p>
                )}
            </div>
        </div>
    );
};
