import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './common/Alert';

export const Login = ({ login }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        'LoginForm',
        'login=',
        typeof login,
        'formData=',
        formData,
        'formErrors',
        formErrors
    );

    const handleSubmit = async evt => {
        evt.preventDefault();
        let result = await login(formData);
        if (result.success) {
            navigate('/companies');
        } else {
            setFormErrors(result.errors);
        }
    };

    /** Update form data field */
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
    };

    return (
        <div className='Login'>
            <div className='flex flex-col mx-6 md:mx-auto  md:max-w-xl w-full mt-4 min-w-fit'>
                <h1 className='mb-4'>Log In</h1>
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

                        {formErrors.length ? (
                            <Alert type='danger' messages={formErrors} />
                        ) : null}

                        <button
                            className='p-2 mt-2 rounded w-20 bg-blue-500 hover:scale-105 hover:bg-blue-600  no-underline text-white transition ease-in-out duration-200 float-right'
                            onSubmit={handleSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
