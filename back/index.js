const express = require('express');
const db = require('./db');
const cors = require('./cors'); // Importer cors.js

const app = express();
const port = 3000;

app.use(cors); 



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});