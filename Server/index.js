require('./db')
const express = require('express');
const cors = require('cors')
const authRoutes = require('./Controller/auth');
const userRoutes = require('./Controller/userController')
const config = require('config');

if (!config.get('jwtPrivateKey')) {
    console.log('Error : jwtPrivateKey is not defined.');
    process.exit(1);
}
let app = express()
app.use(express.json())
app.use(cors({origin:'http://localhost:3000'}))
app.use(cors({origin:'http://localhost:3001'}))

app.use('/api/usersList', userRoutes)
app.use('/api/auth', authRoutes)
// app.use('/login', loginRoutes)
// app.use('/dashboard', dashboardRoutes)


app.listen(4000, () => console.log('Server Started at : 4000'))
