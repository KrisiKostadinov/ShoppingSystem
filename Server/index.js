const express = require('express');
const { PORT } = require('./config/config');

require('./config/db');

const app = express();

app.use(express.json());
app.use('/user', require('./routes/user'));

app.listen(PORT, () => console.log('Server listening on: ' + PORT));