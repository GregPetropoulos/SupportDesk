import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }


  //* if loggedIn is true then return Outlet which is the private route else redirect to home page  by the Navigate
  return loggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
