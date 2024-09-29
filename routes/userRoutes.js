const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Address = require('../models/address');

// Register user with address
router.post('/register', async (req, res) => {
  const { name, address } = req.body; // Destructure the incoming data
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { name } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' }); // Return error if user exists
    }

    const user = await User.create({ name }); // Create user
    await Address.create({ address, userId: user.id }); // Create address linked to the user

    res.status(201).json({ message: 'User and address created successfully' }); // Success response
  } catch (error) {
    res.status(500).json({ error: 'Error creating user and address' }); // Error response
  }
});
module.exports = router;
