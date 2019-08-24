require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application Setup
// - make an express app!
const app = express();
// - get the port on which to run the server
const PORT = process.env.PORT;


app.use(cors());

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});