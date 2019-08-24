require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const types = require('./types');
const minerals = require('./minerals');

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return Promise.all(
            types.map(type => {
                return client.query(`
                    INSERT INTO types (name)
                    VALUES ($1)
                    RETURNING *;
                    `,
                [type])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(types => {
        return Promise.all(
            minerals.map(mineral => {
                const type = types.find(type => {
                    return type.name === mineral.type;
                });
                const typeId = type.id;

                return client.query(`
                    INSERT INTO minerals (name, clear, color, density, type, img_src)
                    VALUES($1, $2, $3, $4, $5, $6);
                `,
                [mineral.name, mineral.clear, mineral.color, +mineral.density, typeId, mineral.imgSrc]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });