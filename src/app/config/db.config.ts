import mongoose from "mongoose"

export const connectDb = async (): Promise<void> => {

    try {
        const connect = await mongoose.connect(process.env.mongo_uri as string)
        console.log("Mongodb Connected ✅")
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }

}