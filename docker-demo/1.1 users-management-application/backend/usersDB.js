const { Pool } = require('pg')
const yaml = require('js-yaml')
const fs   = require('fs');
let config
try {
    // Application reads configuration from path that should be provided via CONFIG_PATH environmental variable
    config = yaml.load(fs.readFileSync(process.env.CONFIG_PATH, 'utf8'));
    console.log("Loaded database config:");
    console.log(config.database);
} catch (e) {
    console.log(e);
}

const pool = new Pool({
    user: config.database.user,
    host: config.database.host,
    database: config.database.database,
    password: config.database.password,
    port: config.database.port,
})

function getUsers(response) {
    return pool.query('SELECT * FROM Users', (error, results) => {
        if (error) {
            throw error
        }
        response.json(results.rows)
    })
}

function getUser(response, id) {
    return pool.query(`SELECT * FROM Users WHERE id=${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.json(results.rows[0])
    })
}

function setUserData(response, id, data) {
    return pool.query(`UPDATE Users SET name = '${data.name}', lastname = '${data.lastname}', city = '${data.city}', 
                        country = '${data.country}' WHERE id=${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('{}')
    })
}

module.exports = { getUsers, getUser, setUserData };
