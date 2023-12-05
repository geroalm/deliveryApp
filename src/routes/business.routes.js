import {Router} from "express"
import { BusinessController } from "../controller/business.controller.js";

const router = Router();


router.get("/", BusinessController.getAllBusiness);
router.get("/:bId", BusinessController.getOneBusiness);
router.post("/", BusinessController.createBusiness);
router.put("/:bId/products", BusinessController.addProduct);


export {router as businessRouter};