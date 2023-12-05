import {Router} from "express"
import { UserController } from "../controller/users.controller.js";

const router = Router();

router.get("/:uid", UserController.getUser);
router.post("/", UserController.createUser);


export {router as usersRouter};