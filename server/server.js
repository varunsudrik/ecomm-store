const express = require('express');
const router = require('./routes');
var cors = require('cors');
var morgan = require('morgan');
require('dotenv').config();

// const connectDatabase = require('./config/database');
const PORT = process.env.PORT || 3099;
const app = express();
app.use(cors());
app.use(morgan('tiny'));

// UncaughtException Error
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

// connectDatabase();

app.use('/api', router);

const server = app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
});
