require('dotenv').config();

const pg = require('pg');

const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then (() => {
        return client.query(`
            CREATE TABLE types (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL
            );

            CREATE TABLE minerals (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL,
                clear BOOLEAN NOT NULL,
                color VARCHAR(256) NOT NULL,
                density DECIMAL(10,2) NOT NULL,
                type VARCHAR(256) NOT NULL,
                img_src VARCHAR(256) NOT NULL
            );
            
        `);
    })
    .then(
        () => console.log('creat tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });