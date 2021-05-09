const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('The API is running ...');
});

app.use('/api/products', productRoutes);

app.listen(3001, console.log('running...'))