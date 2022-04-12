const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
// colors package for console.log
const colors =require('colors')
const connectDB = require('./config/db')
// Custom Middleware for status code in routes
const {errorHandler} = require('./middleware/errorMiddleware');


// * CONNECT TO DB
// *-------------------------------------------------------------
connectDB()
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

//* Routes
// *-------------------------------------------------------------
// connecting route, point to routes folder
app.use('/api/users', require('./routes/userRoutes'));

// Middleware for status codes
app.use(errorHandler);
// *-------------------------------------------------------------

app.listen(PORT, () => console.log(`Server started on ${PORT} Got em`));


