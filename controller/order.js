import Order from "../models/orders.js";


export const getOrders = async (req, res)=>{
    try{
        const orders = await Order.find()
        res.json(orders)
    }catch(error){
        res.status(500).json({message: error.message});

    }
}

export const createOrder  =async (req, res)=>{
try{
    const order = await Order.create(req.body)
    return res.status(201).json(order);
}catch(error){
    res.status(500).json({messsage: error.message});
}
}