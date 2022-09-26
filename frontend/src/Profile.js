import React, { useState, useContext } from 'react';
import Alert from './common/Alert';
import JoblyApi from './api/api';
import UserContext from './auth/UserContext';
import useTimedMessage from './hooks/useTimedMessage';

export const Profile = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: '',
    });
    const [formErrors, setFormErrors] = useState([]);

    // switch to use our fancy limited-time-display message hook
    const [saveConfirmed, setSaveConfirmed] = useState(false);
    // const [saveConfirmed, setSaveConfirmed] = useTimedMessage()

    console.debug(
        'ProfileForm',
        'currentUser=',
        currentUser,
        'formData=',
        formData,
        'formErrors=',
        formErrors,
        'saveConfirmed=',
        saveConfirmed
    );

    const handleSubmit = async evt => {
        evt.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (errors) {
            debugger;
            setFormErrors(errors);
            return;
        }

        setFormData(f => ({ ...f, password: '' }));
        setFormErrors([]);
        setSaveConfirmed(true);

        // trigger reloading of user information throughout the site
        setCurrentUser(updatedUser);
    };

    /** Handle form data changing */
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(f => ({
            ...f,
            [name]: value,
        }));
        setFormErrors([]);
    };

    return (
        <div className='Profile'>
            <div className='flex flex-col mx-6 md:mx-auto  md:max-w-xl w-full mt-4 min-w-fit'>
                <h1 className='mb-4'>Profile</h1>
            </div>
            <div className='flex flex-col border border-black p-4 mx-6 md:mx-auto md:max-w-xl'>
                <div>
                    <div className='text-md font-bold'>Username</div>
                    <p className='pt-3'>{formData.username}</p>
                    <form onSubmit={handleSubmit}>
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
                        <label className='text-md font-bold'>
                            Confirm password to make changes:
                        </label>
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

                        {saveConfirmed ? (
                            <Alert
                                type='success'
                                messages={['Updated successfully.']}
                            />
                        ) : null}

                        <button
                            onSubmit={handleSubmit}
                            className='p-2 mt-2 rounded w-32 bg-blue-500 hover:scale-105 hover:bg-blue-600  no-underline text-white transition ease-in-out duration-200 float-right'
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
