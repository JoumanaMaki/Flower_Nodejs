import express from "express";
import multer from "multer";

//controller
import {getUsers, getUser, editUser, deleteUser, updateImage, addToWhishList, removeAllWishList, removeFromWhishList, create} from "../controller/users";

//middleware
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/userAuth.js";

const storage = multer.diskStorage({
    destination: "../uploads/users",
    filename: function (req, file, cb){
        cb(null, new Date().getTime() + file.originalname);
    },
});

const upload = multer({ storage: storage});
const router = express.Router();


router.get()
router.get('/',adminAuth, getUsers);
router.put("/updateImage", userAuth, upload.single("avatar"), updateImage);
router.get('/editUser/:id', getUser);
router.post('/createUser', create);
router.put('/editUser/:id', userAuth, editUser);
router.delete('/deleteid', adminAuth, deleteUser);
router.post("/addTowhishList", userAuth, addToWhishList);
router.post("removeFromWishList", userAuth, removeFromWhishList);
router.patch("/removeAllWishList", userAuth, removeAllWishList);

export default router;
