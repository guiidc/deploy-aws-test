const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');

const {PORT} = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log('server is online'));