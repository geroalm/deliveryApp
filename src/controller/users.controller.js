import { UserService  } from "../service/users.service.js";
export class UserController{

    static getUser = async (req, res) => {
        try {
            res.json({status:"success", message:"getUser"});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }

    }

    static createUser = async (req, res) => {
        try {
            res.json({status:"success", message:"createUser"});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }

    }

    
}