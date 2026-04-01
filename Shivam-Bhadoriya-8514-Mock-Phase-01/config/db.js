import mongoose from "mongoose";
import envConfig from "./dotenv.js";

const db = () => {
    try {
        mongoose.connect(envConfig.MONGODB_URL);
        console.log(`DataBase Is Successfully Connected!`);
    } catch (error) {
        console.log(error.message);
    }
} 

export default db();