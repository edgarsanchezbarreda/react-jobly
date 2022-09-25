import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Home } from './Home';
import { CompanyList } from './CompanyList';
import { CompanyDetails } from './CompanyDetails';
import { Jobs } from './Jobs';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Profile } from './Profile';
import { CompanyCard } from './CompanyCard';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/companies' element={<CompanyList />}></Route>
            <Route path='/companycard' element={<CompanyCard />}></Route>
            <Route
                path='/companies/:handle'
                element={<CompanyDetails />}
            ></Route>
            <Route path='/jobs' element={<Jobs />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
        </Routes>
    );
};
