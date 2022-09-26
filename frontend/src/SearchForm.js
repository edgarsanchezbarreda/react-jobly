import React, { useState } from 'react';

export const SearchForm = ({ handleFilterSearch }) => {
    const [searchForm, setSearchForm] = useState('');

    const handleChange = evt => {
        setSearchForm(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        handleFilterSearch(searchForm);
        setSearchForm('');
    };

    return (
        <div className='flex items-center mx-10 mt-8'>
            <form
                className='flex  mx-auto md:max-w-5xl w-full my-4 min-w-fit'
                onSubmit={handleSubmit}
            >
                <input
                    className='shrink-0 grow p-2 border border-black rounded-lg w-2/3'
                    type='text'
                    name='searchForm'
                    id='searchForm'
                    value={searchForm}
                    placeholder='Enter search term...'
                    onChange={handleChange}
                />

                <button className='p-2 rounded w-20 bg-blue-500 hover:scale-105 hover:bg-blue-600  right-2 h-full no-underline text-white transition ease-in-out duration-200'>
                    Submit
                </button>
            </form>
        </div>
    );
};
