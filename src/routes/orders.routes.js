import {Router} from "express";
import { OrderController } from "../controller/orders.controllers.js";
const router = Router();

router.get("/:oId", OrderController.getOrder);
router.post("/", OrderController.createOrder);
router.put("/:oId", OrderController.updateStatusOrder);

export {router as ordersRouter};