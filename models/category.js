import mongoose from "mongoose";

const categorySchema =  new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    product:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Flower"
        }
    ]
})

const Category = mongoose.model("Category", categorySchema);
export default Category;