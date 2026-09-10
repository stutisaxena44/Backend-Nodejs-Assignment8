const express = require('express');
const User = require('../model/userModel');
const router = express.Router();

// POST /api/users - Accept user data and store it in MongoDB
router.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ 
            message: "User added successfully", 
            user: newUser 
        });
    } catch (error) {
        res.status(400).json({ message: "Error adding user", error: error.message });
    }
});

// GET /api/users - Retrieve all users from MongoDB
router.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error: error.message });
    }
});

module.exports = router;