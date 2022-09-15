const express = require('express')
const bodyParser = require('body-parser')
const process = require('process')
// Application mode is set via environment variable. By default application uses local storage for users data.
const users = process.env.APP_MODE === "database" ? require('./usersDB') : require('./users')
const jsonParser = bodyParser.json()
const app = express()
const cors = require('cors')
// Port on which application is exposed can be modified via environment variable. By default application is exposed on port 8000.
const port = process.env.APP_PORT || 8000

app.use(cors())
app.set('json spaces', 2);

app.get('/users', (req, res) => {
    console.log(`Received GET request on /users.`)
    users.getUsers(res)
})

app.get('/user/:id', (req, res) => {
    console.log(`Received GET request on /user/${req.params.id}.`)
    users.getUser(res, req.params.id)
})

app.put('/user/:id', jsonParser, (req, res) => {
    console.log(`Received PUT request on /user/${req.params.id}.`)
    users.setUserData(res, req.params.id, req.body)
})

app.listen(port, () => {
    console.log(`Users management backend application started. Listening on port ${port}...`)
    console.log(`Application mode set to: ${process.env.APP_MODE === "database" ? "database" : "local"}.`)
})

process.on('SIGINT', () => {
    console.info("Closing Application...")
    process.exit(0)
})
