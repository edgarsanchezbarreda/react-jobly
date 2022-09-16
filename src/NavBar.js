import React from 'react';
// import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavItem } from 'reactstrap';

export const NavBar = () => {
    return (
        <div className='border-b-2'>
            <header className='container mx-auto mt-10 px-6 text-center h-40 md:h-20'>
                <div className='mx-auto md:mx-0 md:absolute top-10 left-10 mb-8 md:mt-2'>
                    <NavLink
                        to='/'
                        className='text-5xl md:text-xl no-underline text-blue-500 hover:text-blue-600 '
                    >
                        Jobly
                    </NavLink>
                </div>
                <div className='flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10 '>
                    <NavLink
                        to='/login'
                        className='text-xl no-underline text-blue-500 hover:text-blue-600'
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to='/signup'
                        className='text-xl no-underline text-blue-500 hover:text-blue-600'
                    >
                        Sign Up
                    </NavLink>
                </div>
            </header>
        </div>
    );
};
