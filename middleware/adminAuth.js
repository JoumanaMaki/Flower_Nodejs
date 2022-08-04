//utils
import { decodeToken } from "../utils/token.js";

const adminAuth  =async (req,res, next)=>{
    try{
        const auth = req.header('authorization');
        if(! auth) return res.status(401).json({
            message: "Unauthorized"
        });

        const token = auth.split(" ")[1];

        // token doesn't exist
        if(!token || token.exp< new Date()) return res.status(401).json({
            message: "Unauthorized"
        })

        const data = decodeToken(token);
        const role =  data.role;

        if(role !== 1) return res.status(403).json({
            message: "Not Authenticated"
        });

        //set the data into the request if all is good
        req.userData = data
        next();
    }catch(error){
        return res.status(401).json({
            message: error
        })
    }
};

export default adminAuth;