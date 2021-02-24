require('./db')
const express = require('express');
const cors = require('cors')


let userListRoutes = require('./Controller/userController')

let app = express()
app.use(express.json())
app.use(cors({origin:'http://localhost:3000'}))
app.use('/usersList', userListRoutes)
// app.use('/login', loginRoutes)
// app.use('/dashboard', dashboardRoutes)


app.listen(4000, () => console.log('Server Started at : 4000'))
