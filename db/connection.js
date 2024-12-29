const mongoose=require('mongoose');
mongoose.connect(process.env.mongourl)
.then(()=>{
    console.log("Database connected");
}).catch(()=>{
    console.log('Database Connection lost');
    })