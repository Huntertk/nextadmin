import mongoose from "mongoose";

export const connectDB = async () => {
    const connection = {}
    try {
        if(connection.isConnected){
            console.log("Database connected");
            return
        }
       const db = await mongoose.connect(process.env.MONGO_URI);
       connection.isConnected = db.connections[0].readyState

    } catch (error) {
        throw new Error(error)
    }
        
}