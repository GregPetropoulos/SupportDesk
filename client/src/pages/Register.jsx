import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
// *------------------------------------------------
//* REDUXTK
// useSelector-to select from global state
// useDispatch-dispatches action--replaces mapStateToProps,
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS AND REDUCERS TO BE DISPATCHED
import { register, reset } from '../features/auth/authSlice';

// *------------------------------------------------

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    password2: '',
    email: ''
  });

  const { name, email, password, password2 } = formData;
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

    if (password !== password2) {
      toast.error('passwords do not match');
    } else {
      // If the pw match do this with RXTK
      // Created a userData object
      const userData = {
        name,
        email,
        password
      };
      // Dispatch the register action from authSlice.js and pass in the userData object
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className=' sm:text-2xl text-center m-3'>
        <h1 className='flex justify-center items-center font-bold space '>
          <FaUser className='mr-3' />
          Register
        </h1>
        <p> Please create an account</p>
      </section>
      <section className='form items-center'>
        <form
          onSubmit={onSubmit}
          className=' flex-col items-center justify-center space-y-6 '>
          <div className='form-control'>
            <label
              htmlFor='name'
              className='input-group input-group-vertical sm:input-group sm:input sm:flex sm:flex-wrap sm:justify-center input-group-sm  '>
              <span>Name</span>
              <input
                type='text'
                className=' input input-bordered input-sm '
                id='name'
                name='name'
                value={name}
                onChange={onChange}
                placeholder='Enter your name'
                required
              />
            </label>
          </div>
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
          <div className='form-control'>
            <label
              htmlFor='password'
              className='input-group input-group-vertical sm:input-group sm:input sm:flex sm:flex-wrap sm:justify-center input-group-sm '>
              <span>Password</span>
              <input
                type='password'
                className='input input-bordered input-sm  '
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
            <label
              htmlFor='password2'
              className='input-group input-group-vertical sm:input-group sm:input sm:flex sm:flex-wrap sm:justify-center input-group-sm  '>
              <span>Password2</span>
              <input
                type='password'
                className='input input-bordered input-sm '
                id='password2'
                name='password2'
                value={password2}
                onChange={onChange}
                placeholder='Confirm your password'
                required
              />
            </label>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
