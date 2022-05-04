import React from 'react';
import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

// *------------------------------------------------
//* REDUXTK
// useSelector-to select from global state
// useDispatch-dispatches action--replaces mapStateToProps
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { login, reset } from '../features/auth/authSlice';
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
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  // *------------------------------------------------

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // Redirect if successful user logged in
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

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
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className=' text-2xl text-center m-3'>
        <h1 className='flex justify-center items-center font-bold space '>
          <FaSignInAlt className='mr-3' /> Login
        </h1>
        <p> Please login to request support</p>
      </section>
      <section className='form items-center '>
        <form
          onSubmit={onSubmit}
          className=' flex-col items-center justify-center space-y-6 '>
          <div className='form-control'>
            <label
              htmlFor='email'
              className='input-group input-group-vertical sm:input-group sm:input sm:flex sm:flex-wrap sm:justify-center input-group-sm '>
              <span>Email</span>
              <input
                type='email'
                className='input input-bordered input-sm '
                id='email'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='Enter your email'
                required
              />
            </label>
          </div>
          <div className='form-control items-center'>
            <label
              htmlFor='password'
              className='input-group input-group-vertical sm:input-group sm:input sm:flex sm:flex-wrap sm:justify-center input-group-sm  '>
              <span>Password</span>
              <input
                type='password'
                className='input input-bordered input-sm'
                id='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder='Enter your password'
                required
              />
            </label>
          </div>

          <div className='form-control'>
            <button className='btn btn-secondary btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
