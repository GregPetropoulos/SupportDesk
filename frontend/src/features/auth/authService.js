// // *MAKING A AXIOS CALL FOR AUTH

// import axios from 'axios';
// //* This is the same thing we did in the Postman endpoint for registering a user
// //added  "proxy":"http://localhost:5000" to package.json because this was trying to access "http://localhost:3000/api/users on frontend

// const API_URL = '/api/users/'

// // *REGISTER A USER TO BACKEND
// const register = async (userData) => {
//   const response = await axios.post(API_URL, userData);

//   if (response.data) {
//     // * Once we get a response, save the data we get back to local storage, local storage can only hold strings, this includes the JWT.
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }
//   return response.data; //* This returns the userData and jwt
// };

// // * LOGIN USER
// const login = async(userData) => {
//   const response = await axios.post(API_URL + 'login', userData);

//   if (response.data) {
//     // * Once we get a response, save the data we get back to local storage, local storage can only hold strings, this includes the JWT.
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }
//   return response.data; //* This returns the userData and jwt
// }

// // *LOGOUT USER
// const logout =() => localStorage.removeItem('user')

// const authService = {
//   register,
//   logout,
//   login,
// };
// export default authService;
// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------
import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login,
}

export default authService