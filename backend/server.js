const express = require('express');
const dotenv = require('dotenv').config();
const path =require('path')
const PORT = process.env.PORT || 5000;
// colors package for console.log
const colors = require('colors');
const connectDB = require('./config/db');
// Custom Middleware for status code in routes
const { errorHandler } = require('./middleware/errorMiddleware');

// * CONNECT TO DB
// *-------------------------------------------------------------
connectDB();
// *-------------------------------------------------------------

const app = express();
// app.get('/', (req, res)=> res.send('Hello'))
// app.get('/api/users', (req, res) =>
//   res.status(200).json({ message: 'Welcome to the support desk api' })
// );

// * MIDDLEWARE HANDLES THE BODY PARSER
// *-------------------------------------------------------------
// * TO SEND RAW JSON
app.use(express.json());
// * TO SEND URL ENCODED FORM
app.use(express.urlencoded({ extended: false }));
// *-------------------------------------------------------------

//* ROUTES
// *-------------------------------------------------------------
// connecting route, point to routes folder
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// *SERVE FRONTEND--DEPLOYMENT TO HEROKU
if (process.env.NODE_ENV === 'production') {
  // set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
  );
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' });
  });
}

//*Middleware for status codes
app.use(errorHandler);
// *-------------------------------------------------------------

app.listen(PORT, () => console.log(`Server started on ${PORT} Got em`));
