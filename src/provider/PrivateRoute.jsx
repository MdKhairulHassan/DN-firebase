import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loading></Loading>;
    // <span className="loading loading-bars loading-xl"></span>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
  // if user have: return children
  // if user not have: navigate--> login
};

export default PrivateRoute;
