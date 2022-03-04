import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/imoliApp';

console.log(MONGO_URI)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${MONGO_URI}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
