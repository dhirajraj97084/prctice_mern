const express=require('express');
const router=require('./router/Router')
const connectDb=require('./databse/db')
const app=express();
port=3500;

app.use('/api/auth',router);
app.use(express.json());


connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`your application running on localhost:${port}`);
    })
})