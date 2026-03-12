// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB (replace 'your-mongodb-uri' with your MongoDB connection URI)
mongoose.connect('mongodb+srv://Hacker:jitesh@123@cluster0.nlpetzk.mongodb.net/?retryWrites=true&w=majority').then(()=>{
  console.log("connected to db");
});

// Define a schema for your data
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  city: String,
  country: String,
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle form submission
app.post('/api/join', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, city, country } = req.body;

    // Create a new user document
    const newUser = new User({ fullName, email, phoneNumber, city, country });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:8000`);
});

// Route to handle form submission
app.post('/api/join', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, city, country } = req.body;

    // Create a new user document
    const newUser = new User({ fullName, email, phoneNumber, city, country });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:8000`);
});
