import express from "express";
import { getCategory } from "../controller/category.js";


//controller
import {getCategorys, getCategory, createCategory, editCategory, deleteCategory, addToCategory, deleteFromCategory} from "../controller/category.js";

//middleware
import adminAuth  from "../middleware/adminAuth.js";


const router = express.Router();


router.get('/', getCategorys)
router.get('/:id', getCategory)
router.post('/', adminAuth, createCategory)
router.put('/addToCategory/:id', adminAuth, editCategory)
router.put('/:id', adminAuth,editCategory)




