import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const accessToken = useSelector((state) => state.session.accessToken);
  const location = useLocation();
  const fromLocation = location.state && location.state.from;
  const previousLocation = fromLocation ? fromLocation : { pathname: '/login' };

  if (accessToken) {
    return children;
  } else if (!accessToken && !loading) {
    return <Navigate to="/loginForm" state={{ from: location }} replace />;
  } else {
    return <p>Something went wrong</p>;
  }
}

export default PrivateRoute;
