require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// Application Setup
// - make an express app!
const app = express();
// - get the port on which to run the server
const PORT = process.env.PORT;
const pg = require('pg');
app.use(cors());
app.use(morgan('dev')); // http logging
app.use(express.static('public')); 
app.use(express.json()); 

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

app.get('/api/minerals', (req, res) => {
    client.query(`
        SELECT
            m.id,
            m.clear,
            m.color,
            m.density,
            t.type,
            m.img_src
        FROM minerals m
        JOIN types t
        ON   m.id = t.id
        ORDER BY m.density;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});

