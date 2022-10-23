// Conetting database with mongoose
import dotenv from "dotenv"
import mongoose from 'mongoose'

// Dotenv config
dotenv.config()

// Set up default mongoose connection
const { DB_URL } = process.env
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Create mongoose connection asyn 
const connectDB = async() => {
    try {
        await mongoose.connect(DB_URL, config)
        console.log('Connected to mongoDB')
    } catch (err) {
        console.log(err)
    }
}

// Export mongoose connection
export default connectDB