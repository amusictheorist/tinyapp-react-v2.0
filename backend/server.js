// Setup
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 8080;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes

// Starting the server
app.listen(PORT, () => {
  console.log(`TinyApp server listening on port ${PORT}`);
});