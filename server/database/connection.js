import mongoose from 'mongoose';


const connectDB = async()=>{
try {
  mongoose.connect('mongodb://localhost:27017/DocCato').then(()=>{
    console.log(`Database connected successfully`)
  })
    
} catch (error) {
    console.log(error)
    process.exit(1)
}






}

export default connectDB

