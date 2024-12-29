const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT;
require('./db/connection');
const feedback=require('./routes/feedbackroutes')

app.use('/feed',feedback);



app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})
