import React from 'react';

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

// RXTK
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
  // RXTK
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Grabs user from the state
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    // RXTK
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div>
      <header className='header'>
        <div className='logo'>
          <Link to='/'>Support Desk</Link>
        </div>
        <ul>
          {user ? (
            <li>
              {' '}
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>
                  <FaSignInAlt />
                  Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser />
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
