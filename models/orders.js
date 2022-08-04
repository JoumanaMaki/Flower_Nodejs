import mongoose from "mongoose";

const OrderSchema  =new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    order:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Flower"
        }
    ]

})


const Order = mongoose.model("Order", OrderSchema);

export default Order;