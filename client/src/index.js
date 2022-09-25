import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// *RXTK
import { store } from './app/store';
import { Provider } from 'react-redux';

//For render deployment,dusables devtools in prod mode
import {disableReactDevTools}from '@fvilers/disable-react-devtools'
if (process.env.NODE_ENV==='production') disableReactDevTools()


ReactDOM.render(
  //* RXTK WRAPPER
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// FOR REACT 18 USE THIS BUT NOT UNTIL THEY CATCH UP WITH THE ERRORS MAINTAINED
// import ReactDOM from 'react-dom/client';
  
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
