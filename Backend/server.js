const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 6000;
const { connectDB } = require('./config/db');
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/profiles', require('./routes/profileRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on: ${port}`));
