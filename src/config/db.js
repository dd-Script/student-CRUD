const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('MongoDB connected successfully')
    }).catch((error) => {
        console.error('MongoDB connection failed:', error.message)
        process.exit(1) 
    })
}

module.exports = connectDB