const userCltr = require('./controllers/usersController')
const authenticateUser = require('./middleware/authentication')
const configureDB = require('./config/configureDB')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT
configureDB()

//User routes ------------------------------------------------------------------------------

//public routes
app.post('/api/users/register', userCltr.register)
app.post('/api/users/login', userCltr.login)
//private routes
app.get('/api/users/account', authenticateUser, userCltr.account)
app.put('/api/users/account', authenticateUser, userCltr.accountUpdate)

app.listen(port, () => {
    console.log("server is running at port ", port)
})
