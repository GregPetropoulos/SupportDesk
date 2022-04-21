// import React from 'react';
// import { useState, useEffect } from 'react';
// import { FaSignInAlt } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import Spinner from '../components/Spinner';

// // *------------------------------------------------
// //* REDUXTK
// // useSelector-to select from global state
// // useDispatch-dispatches action--replaces mapStateToProps
// import { useSelector, useDispatch } from 'react-redux';

// // Actions
// import { login, reset } from '../features/auth/authSlice';
// // *------------------------------------------------

// const Login = () => {
//   const [formData, setFormData] = useState({
//     password: '',
//     email: ''
//   });

//   const { email, password } = formData;

//   // *------------------------------------------------
//   //* REDUXTK
//   // Handle sending actions to reducer
//   const dispatch = useDispatch();
//   // useSelector passes in a function state
//   // Brings in initialState from authSlice.js
//   const { user, isLoading, isError, isSuccess, message } = useSelector(
//     (state) => state.auth
//   );
//   // *------------------------------------------------

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isError) {
//       toast.error(message);
//     }
//     // Redirect if successful user logged in
//     if (isSuccess || user) {
//       navigate('/');
//     }
//     dispatch(reset());
//   }, [isError, isSuccess, user, message, navigate, dispatch]);

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value
//     }));
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();

//     // Created a userData object
//     const userData = {
//       email,
//       password
//     };
//     // Dispatch the login action from authSlice.js and pass in the userData object
//     dispatch(login(userData));
//   };
//   if (isLoading) {
//     return <Spinner />;
//   }
//   return (
//     <>
//       <section className='heading'>
//         <h1>
//           <FaSignInAlt />
//           Login
//         </h1>
//         <p> Please login to request support</p>
//       </section>
//       <section className='form'>
//         <form onSubmit={onSubmit}>
//           <div className='form-group'>
//             <input
//               type='email'
//               className='form-control'
//               id='email'
//               name='email'
//               value={email}
//               onChange={onChange}
//               placeholder='Enter your email'
//               required
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='password'
//               className='form-control'
//               id='password'
//               name='password'
//               value={password}
//               onChange={onChange}
//               placeholder='Enter your password'
//               required
//             />
//           </div>

//           <div className='form-group'>
//             <button className='btn btn-block'>Submit</button>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };

// export default Login;
// ---------------------
// ----------------------
// ----------------------
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
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

    const userData = {
      email,
      password
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in to get support</p>
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
              placeholder='Enter password'
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
}

export default Login;
