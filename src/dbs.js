import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/clinica_veterinariaDB');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed');
        process.exit(1);
    }
}