import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from './auth/UserContext';

export const NavBar = ({ logout }) => {
    const { currentUser } = useContext(UserContext);
    console.debug('Navigation', 'currentUser=', currentUser);

    const activeLinkStyle =
        'text-xl underline underline-offset-8 text-slate-700 hover:text-black';
    const inactiveLinkStyle =
        'text-xl no-underline text-blue-500 hover:text-blue-600';

    const linkStyle = isActive => {
        return isActive ? activeLinkStyle : inactiveLinkStyle;
    };

    const loggedOut = () => {
        return (
            <div className='flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10 '>
                <NavLink
                    to='/login'
                    className={({ isActive }) => linkStyle(isActive)}
                >
                    Login
                </NavLink>
                <NavLink
                    to='/signup'
                    className={({ isActive }) => linkStyle(isActive)}
                >
                    Sign Up
                </NavLink>
            </div>
        );
    };

    const loggedIn = () => {
        return (
            <div className='flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10 '>
                <NavLink
                    to='/companies'
                    className={({ isActive }) => linkStyle(isActive)}
                >
                    Companies
                </NavLink>
                <NavLink
                    to='/jobs'
                    className={({ isActive }) => linkStyle(isActive)}
                >
                    Jobs
                </NavLink>
                <NavLink
                    to='/profile'
                    className={({ isActive }) => linkStyle(isActive)}
                >
                    Profile
                </NavLink>
                <NavLink
                    to='/'
                    className='text-xl no-underline text-blue-500 hover:text-blue-600'
                    onClick={logout}
                >
                    Log out {currentUser.firstName || currentUser.username}
                </NavLink>
            </div>
        );
    };

    return (
        <div className='border-b-2'>
            <header className='container mx-auto mt-10 px-6 text-center h-40 md:h-20'>
                <div className='mx-auto md:mx-0 md:absolute top-10 left-10 mb-8 md:mt-2'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => linkStyle(isActive)}
                    >
                        Jobly
                    </NavLink>
                </div>
                {currentUser ? loggedIn() : loggedOut()}
            </header>
        </div>
    );
};
