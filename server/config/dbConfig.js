const mongoose=require('mongoose');
mongoose.connect(process.env.mongo_url);


const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log('Mongodb connected successfully');
})

connection.on('error',(err)=>{
    console.log('Mongodb connection error: ',err);
})

module.exports=mongoose;