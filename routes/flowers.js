import { Express } from "express";
import multer from "multer";

//controller
import { getProducts,getProducts, createProduct, editProduct, deleteProduct, assignImages, deleteImage, getProduct } from "../controller/flowers.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";

const storage = multer.diskStorage({
    destination: "../uploads/products",
     filename : function (req, filee, cb){
        cb(null, new Date().getTime() + filee.originalname);
     }
});

const upload = multer({ storage: storage});
const router = express.Router();

router.get('/getProducts', getProducts)
router.get('/getProduct/:id', getProduct)
router.post('/createProduct',  createProduct)
router.post('/editProduct/:id', adminAuth, editProduct)
router.post('/deleteProduct/:id', adminAuth, deleteProduct)
router.post('/assignImages/:id', adminAuth, upload.array("images", process.env.NUMBER_OF_PRODUCTS_IMAGES), assignImages);
router.post("/image/:id/:image", adminAuth, deleteImage);

export default router;
