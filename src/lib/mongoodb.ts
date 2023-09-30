import mongoose from "mongoose";

// const { MONGODB_URI } = process.env;

// if (!MONGODB_URI) {
//     throw new Error("MONGODB_URI must be defined")
// }

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb://127.0.0.1:27017/nextpractica")
        if (connection.readyState === 1) {
            console.log("MongoDb connected")
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
    }
};