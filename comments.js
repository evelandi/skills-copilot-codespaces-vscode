// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express app
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Data
let comments = [
  {
    id: 1, username: 'alice', content: 'first comment'
  },
  {
    id: 2, username: 'bob', content: 'second comment'
  },
  {
    id: 3, username: 'charlie', content: 'third comment'
  }
  ];