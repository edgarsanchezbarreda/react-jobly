import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from './auth/UserContext';

export const PrivateRoute = ({ token }) => {
    return token ? <Outlet /> : <Navigate to='/login' />;
};
