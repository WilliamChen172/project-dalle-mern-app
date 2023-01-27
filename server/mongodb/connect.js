import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    
    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error());
}

export default connectDB;
