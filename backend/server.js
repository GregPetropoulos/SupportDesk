const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();
// app.get('/', (req, res)=> res.send('Hello'))
// app.get('/api/users', (req, res) =>
//   res.status(200).json({ message: 'Welcome to the support desk api' })
// );

// Routes
// connecting route, point to routes folder
app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => console.log(`Server started on ${PORT} Yayyy`));
