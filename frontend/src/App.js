// Author: Greg Petropoulos
// 4.29.22
// Support Ticket Services 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// In order to make toastify work through out application must bring in ToastContainer AND toastify css file
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import PrivateRoute from './components/PrivateRoute';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* Nested private route with custom hook------------- */}
            <Route path='/new-ticket' element={<PrivateRoute />}>
              <Route path='/new-ticket' element={<NewTicket />} />
            </Route>
            <Route path='/tickets' element={<PrivateRoute />}>
              <Route path='/tickets' element={<Tickets />} />
            </Route>
            <Route path='/ticket/:ticketId' element={<PrivateRoute />}>
              <Route path='/ticket/:ticketId' element={<Ticket />} />
            </Route>

            {/* --------------------------------------------------- */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
