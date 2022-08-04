import fs from 'fs';
// model
import Flower from "../models/flowers";


//all products
export const getProducts = async (req, res) =>{
    try{
        const products = await Flower.find()
        res.json(prducts)
    }catch(error){
        res.status(500).json({ message: error.message});
    }
}

//just 1 product
export const getProduct = async (req, res)=>{
    const id =req.params.id
    try{
        const product = await Flower.findById(id)
        res.json(product)

    }catch(error){
        res.status(500).json({ message: error.message});
    }
}

export const createProduct = async (req, res)=>{
    try{
        const product = await Flower.create(req.body)
        res.json(product)
    } catch(error){
        res.status(500).json({message : error.message});
    }
}

export const editProduct = async (req, res)=>{
    const id = req.params.id
    try{
        await Flower.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "Product update successffuly"});

    } catch(error){
        res.status(500).json({message: error.message});

    }
}



export const deleteProduct = async (req, res) =>{
    const id = req.params.id
    try{
        await Flower.findByIdAndDelete(id)
        res.status(200).json({message: "Product deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const assignImages = async (req, res)=>{
    try{
        const id = req.params.id;
        const product = await Flower.findById(id);

        if(!product)
         return res.status(400).json({message: "Product doesn't exist"});
        
        req.files.forEach((image) => product.images.push(image.filename));
        await product.save();
        res.status(200).json({message: "image added successfully"});
    } catch(error){
        res.status(500).json({message: error.message});
    }

};


export const deleteImage = async (req, res) =>{
    try{
        const {id, image} = req.params;
        const product = await Flower.findById(id);

        if(!product)
          return res.status(400).json({message: "product doesn't exist"});

        const imageExist = product.images.filter((im) => im ==image).length;
        if(imageExist == 0)
           return res.status(400).json({message: "image doesn't exist"});

        product.images.pull(image);
        await product.save();

        if(fs.existsSync("uploads/products/"+ image))
            fs.unlinkSync("uploads/products/"+ image);
        return res.status(200).json({message: "image deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};