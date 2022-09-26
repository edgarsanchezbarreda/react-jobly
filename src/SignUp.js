import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = ({ signup }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        'SignupForm',
        'signup=',
        typeof signup,
        'formData=',
        formData,
        'formErrors=',
        formErrors
    );

    const handleSubmit = async evt => {
        evt.preventDefault();
        let result = await signup(formData);
        if (result.success) {
            navigate('/companies');
        } else {
            setFormErrors(result.errors);
        }
    };

    /** Update form data field */
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    return (
        <div className='SignUp'>
            <div className='flex flex-col mx-6 md:mx-auto  md:max-w-xl w-full mt-4 min-w-fit'>
                <h1 className='mb-4'>Sign Up</h1>
            </div>
            <div className='flex flex-col border border-black p-4 mx-6 md:mx-auto md:max-w-xl'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className='text-md font-bold'>Username</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            value={formData.username}
                            className='flex items-center p-2 border border-black w-full h-10 my-2'
                            onChange={handleChange}
                        />
                        <label className='text-md font-bold'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={formData.password}
                            className='flex items-center p-2 border border-black w-full h-10 my-2'
                            onChange={handleChange}
                        />
                        <label className='text-md font-bold'>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            id='firstName'
                            value={formData.firstName}
                            className='flex items-center p-2 border border-black w-full h-10 my-2'
                            onChange={handleChange}
                        />
                        <label className='text-md font-bold'>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            id='lastName'
                            value={formData.lastName}
                            className='flex items-center p-2 border border-black w-full h-10 my-2'
                            onChange={handleChange}
                        />
                        <label className='text-md font-bold'>Email</label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            value={formData.email}
                            className='flex items-center p-2 border border-black w-full h-10 my-2'
                            onChange={handleChange}
                        />

                        <button
                            onSubmit={handleSubmit}
                            className='p-2 mt-2 rounded w-20 bg-blue-500 hover:scale-105 hover:bg-blue-600  no-underline text-white transition ease-in-out duration-200 float-right'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
