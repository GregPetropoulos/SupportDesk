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
    <header className='flex items-center justify-between border-b-2 border-300  pb-2'>
      <nav className='navbar bg-base-100 '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            {/* Mobile menu */}
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-5 p-2 shadow bg-base-100 rounded-box w-fit'>
              {user ? (
                <li className='btn btn-outline btn-primary btn-md'>
                  {' '}
                  <button to='' onClick={onLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className='btn btn-outline btn-primary btn-sm p-5'>
                    <Link to='/login'>
                      <FaSignInAlt />
                      Login
                    </Link>
                  </li>
                  <li className='btn btn-outline btn-primary btn-sm p-5'>
                    <Link to='/register'>
                      <FaUser />
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            Support Desk
          </Link>
        </div>
        {/* Desktop menu--could be refactored to DRY  */}
        <div className='navbar-end hidden md:flex '>
          <ul className='menu menu-horizontal p-0 md:justify-between'>
            {user ? (
              <li className=''>
                {' '}
                <button
                  className='btn btn-outline btn-primary btn-sm btn-md rounded'
                  onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            ) : (
              <>
                <li className='btn btn-outline btn-primary btn-md rounded mr-2 p-px '>
                  <Link to='/login'>
                    <FaSignInAlt />
                    Login
                  </Link>
                </li>
                <li className='btn btn-outline btn-primary btn-md rounded ml-2 p-px '>
                  <Link to='/register'>
                    <FaUser />
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
