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
  if(isLoading){
    return <Spinner/>
  }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser />
          Register
        </h1>
        <p> Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
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
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm your password'
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

export default Register;
