import mongoose from "mongoose";

const flowerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    images: [String],
})

const Flower = mongoose.model("Flower", flowerSchema)
export default Flower;