require('./db')
const express = require('express');


let userListRoutes = require('./Controller/userController')

let app = express()
app.use(express.json())
app.listen(4000, () => console.log('Server Started at : 4000'))

app.use('/usersList', userListRoutes)