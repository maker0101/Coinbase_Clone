import { Navigate, Outlet } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

const ProtectedPages = () => {
  const { user } = useContext(UserContext);
  const isAuth = !!user?.accessToken;

  return isAuth ? <Outlet /> : <Navigate to='/signin' />;
};

export default ProtectedPages;
