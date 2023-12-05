export class OrderController {

    static getOrder = async(req,res)=>{
        try {
            res.json({status:"success", message:"getOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    }  

    static createOrder = async(req,res)=>{
        try {
            res.json({status:"success", message:"createOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    }  

    static updateStatusOrder = async(req,res)=>{
        try {
            res.json({status:"success", message:"updateStautsOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    }


}