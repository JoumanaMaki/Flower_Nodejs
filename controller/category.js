import Category from "../model/category";

export const getCategorys = async (req, res)=>{
    try{
        const categorys = await Category.find().populate({ path: "product"}).exec()
        res.json(categorys)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getCategory  = async(req, res) =>{
    const id = req.params.id
    try{
        const category = await Category.findById(id).populate({path: "product"}).exec()
        res.json(category)
    }catch(error){
        res.status(500).json({message: error.messages});
    }
}


export const createCategory =  async (req,res)=>{
    try{
        const category = await Category.create(req.body)
        res.json(category)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const editCategory = async (req, res)=>{
    const id = req.params.id;
    try{
        await Category.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "Category update successfully"})
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const deleteCategory  =async ( req,res)=>{
    const id = req.params.id
    try{
        await Category.findByIdAndUpdate(id)
        res.status(500).json({message: "Category deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const addToCategory = async (req, res)=>{
    try{
        const category_id = req.params.id;
        const category = await Category.findById(category_id);

        if(!category)
           return res.status(400).json({message: "Category doesn't exist"});

        const check = category.product.some((item)=> item.toString()=== req.body.product)
        if (check)
          return res.status(400).json({message: "Product already in the Category"});
        
        category.product.push(req.body.product);
        await category.save();

        return res.status(200).json({message: "add successfully"});

    }catch(error){
        res.status(500).json({message: error.message});

    }
}

export const deleteFromCategory = async (req,res) =>{
    try{
        const category_id = req.params.id;
        const category = await Category.findById(category_id);

        if(!category)
            return res.status(400).json({message:"Category not found"});

        if (req.body.product)
            category.product = category.product.filter((item)=> item.toString() !== req.body.product)


        await category.save();
        return res.status(200).json({message: "delete successfully"});

    }catch(error){
        res.status(500).json({message: error.message});
    }
}