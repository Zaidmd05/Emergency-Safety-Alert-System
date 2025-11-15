const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

require('dotenv').config();
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sos', require('./routes/sosRoutes'));
// app.use('/api/admin', require('./routes/adminRoutes'));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
