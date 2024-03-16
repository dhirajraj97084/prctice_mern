const mongoose=require('mongoose');
const URI= 'mongodb+srv://dhirajtiwari97084:dhiraj4545@merndatabase.xt8dhij.mongodb.net/?retryWrites=true&w=majority&appName=merndatabase'
const connectDb=async()=>{
 try {
    await mongoose.connect(URI);
    console.log('your database connect successfuly')
 } catch (error) {
    console.error('your databse connection failed');
    process.exit(0);
 }
}
module.exports=connectDb;