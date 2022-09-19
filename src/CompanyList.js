import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CompanyCard } from './CompanyCard';
import { SearchForm } from './SearchForm';

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
    // const handleFilterSearch = searchFormVal => {
    //     const getFilteredCompanies = async (req, res, next) => {
    //         try {
    //             let comps = await axios.get(
    //                 `${BASE_API_URL}/companies?name=${searchFormVal}`
    //             );

    //             setCompanies(comps.data.companies);
    //         } catch (err) {
    //             return next(err);
    //         }
    //     };
    // };
    console.log(companies[0]);
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
