const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 6000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/profiles', require('./routes/profileRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on: ${port}`));
