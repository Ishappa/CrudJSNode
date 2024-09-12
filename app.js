const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBexm'

const app = express();

// mongoose.connect(url, { useNewUrlParser: true });
mongoose.connect(url);
const con = mongoose.connection

con.on('open',()=> {
    console.log("MongoDB database connected!");
})

app.use(express.json());

const alineRouter = require('./routers/aliens');
app.use('/aliens', alineRouter);
app.listen(9000, ()=>{
    console.log('Server is running on port 9000');
})

