const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
require('dotenv').config();

const app = express();
connectDB();

// CORS configuration for Vercel deployment
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookmarks', bookmarkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));