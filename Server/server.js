require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('./config/db')

const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT ||5005

// import 
const userRoute = require('./routes/userRoute');
const studentRoute = require('./routes/studentRoute')

//Routes
app.use('/users', userRoute )
app.use('/api/students',studentRoute)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port , (req,res)=>{
    console.log('server is running at port ',port)
})



