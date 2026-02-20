const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
const { clerkMiddleware } = require('@clerk/express');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware()); 

app.use('/api/bookmarks', bookmarkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));