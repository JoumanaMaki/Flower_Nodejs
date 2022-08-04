import { Express} from "express";

//controller

import { createOrder, getOrders } from "../controller/order.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.get("/", adminAuth, getOrders);
router.post("/", userAuth, createOrder);

export default router;