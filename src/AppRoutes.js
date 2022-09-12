import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Home';
import { Companies } from './Companies';
import { CompanyDetails } from './CompanyDetails';
import { Jobs } from './Jobs';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Profile } from './Profile';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/companies' element={<Companies />}></Route>
            <Route
                path='/companies/:company'
                element={<CompanyDetails />}
            ></Route>
            <Route path='/jobs' element={<Jobs />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
        </Routes>
    );
};
