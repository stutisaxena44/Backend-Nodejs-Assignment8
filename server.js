const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/userRouter');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB Connection (make sure your local MongoDB server is running)
const mongoURI = 'mongodb://127.0.0.1:27017/studentDB';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
    });

// Use the user router
app.use('/', userRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});