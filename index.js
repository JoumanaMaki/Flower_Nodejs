import express from "express";
import db from"./database.js";
import dotenv from "dotenv";
import http from "http";




// for the models
import userModel from './models/users.js';
import flowerModel from './models/flowers.js';
import CategoryModel from './models/category.js';
import orderModel from './models/orders.js';




//controller
//import 



const app = express();
app.use(express.json());
const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Listening at port ${port || 8000}`);
});