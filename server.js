const express = require('express');
const app = express();
const mongoose = require ('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const EmployeeRoute = require('./routes/employee')
mongoose.connect('mongodb://localhost:27017/testdb' , {useNewUrlParser: true})
const db =mongoose.connection
db.on('error', (err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Database connection created!')
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const PORT =process. env.PORT || 3000
app.listen(PORT,()=>{
    console.log('server is running on port ${PORT}')
});
app.use('/api/employee', EmployeeRoute)