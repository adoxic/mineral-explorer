/* eslint-disable indent */
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');
// Application Setup
// - make an express app!
// - get the port on which to run the server


const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();


const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(morgan('dev')); // http logging
app.use(express.static('public'));
app.use(express.json()); 

app.get('/api/minerals', (req, res) => {
    client.query(`
        SELECT
            m.name,
            m.clear,
            m.color,
            t.name as type,
            m.density,
            m.img_src
        FROM minerals m
        JOIN types t
        ON m.type = t.id 
        ORDER BY density;
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

app.get('/api/minerals/:id', (req, res) => {
    const id = req.params.id;

    client.query(`
        SELECT
            m.*,
            t.name as type
        FROM minerals m
        JOIN types t
        ON   m.type = t.id
        WHERE m.id = $1;
    `,
    [id]
    )
        .then(result => {
            const mineral = result.rows;
            if(!mineral) {
                res.status(404).json({
                    error: `Mineral id ${id} does not exist`
                });
            }
            else {
                res.json(result.rows);
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.post('/api/minerals', (req, res) => {
    const mineral = req.body;
    console.log(req.body);
    client.query(`
        INSERT INTO minerals (name, clear, color, density, type, img_src)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `,
    [mineral.name, mineral.clear, mineral.color, mineral.density, mineral.type, mineral.imgSrc]
    )
        .then(result => {
            console.log('result');
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/types', (req, res) => {
    client.query(`
        SELECT
            id,
            name
        FROM types;
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

