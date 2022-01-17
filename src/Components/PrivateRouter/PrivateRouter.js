import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// private router and navigate in primary page after sign up or log in
const PrivateRouter = ({ children, redirectTo }) => {
    const location = useLocation();
    let {userInfo} = useAuth();
    return userInfo?.email ? children : <Navigate replace state={{from :location}} to={redirectTo} />
}
export default PrivateRouter;