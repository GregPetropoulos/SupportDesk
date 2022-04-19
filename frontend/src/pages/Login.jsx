import React from 'react';
import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
// *------------------------------------------------
//* REDUXTK
// useSelector-to select from global state
// useDispatch-dispatches action--replaces mapStateToProps
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { login } from '../features/auth/authSlice';
// *------------------------------------------------

const Login = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: ''
  });

  const { email, password } = formData;

  // *------------------------------------------------
  //* REDUXTK
  // Handle sending actions to reducer
  const dispatch = useDispatch();
  // useSelector passes in a function state
  // Brings in initialState from authSlice.js
  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  // *------------------------------------------------

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    // Created a userData object
    const userData = {
      email,
      password
    };
    // Dispatch the login action from authSlice.js and pass in the userData object
    dispatch(login(userData));
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p> Please login to request support</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              required
            />
          </div>

          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
