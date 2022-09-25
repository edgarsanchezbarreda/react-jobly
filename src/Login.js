import React from 'react';

export const Login = () => {
    return (
        <div className='Login'>
            <div className='flex flex-col mx-6 md:mx-auto  md:max-w-xl w-full mt-4 min-w-fit'>
                <h1 className='mb-4'>Log In</h1>
            </div>
            <div className='flex flex-col border border-black p-4 mx-6 md:mx-auto md:max-w-xl'>
                <div>
                    <form>
                        <label className='text-md font-bold'>Username</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            // value={formData.username}
                            className='flex items-center p-2 border border-black w-full h-10 my-2'
                        />
                        <label className='text-md font-bold'>Password</label>
                        <input
                            type='text'
                            name='password'
                            id='password'
                            // value={formData.username}
                            className='flex items-center p-2 border border-black w-full h-10 my-2'
                        />

                        <button className='p-2 mt-2 rounded w-20 bg-blue-500 hover:scale-105 hover:bg-blue-600  no-underline text-white transition ease-in-out duration-200 float-right'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
