const express = require('express');
const app = express();
const contact = require('./contact');

app.use(express.static('public'));
app.use(express.json());
app.use('/', contact);

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on Port ${port}...`));