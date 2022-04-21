const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
console.log(process.env.OUTRO);
// Por algum motivo, a AWS não roda o PORT do env
app.listen(4000, () => console.log(`server running on port ${process.env.PORT}`));