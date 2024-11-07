const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import routes
const db = require('./config/db'); // MongoDB connection
const app = express();

app.use(express.json());
app.use(cors());

// User Routes
app.use('/api/users', userRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
