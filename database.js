import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const db = mongoose.connect(process.env.DB_CONNECTION)
.then(res => console.log("connection success"))
.catch(e => console.log(e));

export default db