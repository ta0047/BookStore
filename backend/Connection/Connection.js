import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MongoDBURI;
console.log("MongoDB URI:", URI);

const connectMongoDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error occurred while connecting to MongoDB:", error);
    }
};

export default connectMongoDB;
