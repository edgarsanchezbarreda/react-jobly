import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { CompanyList } from './CompanyList';
import { CompanyDetails } from './CompanyDetails';
import { Jobs } from './Jobs';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Profile } from './Profile';
import { CompanyCard } from './CompanyCard';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = ({ login, token, signup }) => {
    console.debug(
        'Routes',
        `login=${typeof login}`,
        `register=${typeof register}`
    );
    return (
        <Routes>
            <Route element={<PrivateRoute token={token} />}>
                <Route element={<CompanyList />} path='/companies' exact />
                <Route element={<CompanyCard />} path='/companycard' exact />
                <Route element={<CompanyDetails />} path='/companies/:handle' />
                <Route element={<Jobs />} path='/jobs' exact />
                <Route element={<Profile />} path='/profile' exact />
            </Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login login={login} />}></Route>
            <Route path='/signup' element={<SignUp signup={signup} />}></Route>
        </Routes>
    );
};
