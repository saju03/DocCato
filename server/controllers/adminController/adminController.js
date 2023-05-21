import adminLoginIntractor from "../../interactors/adminIntractors/adminLoginIntractor.js";
import blockUser from "../../interactors/adminIntractors/blockUserIntractor.js";
import getAlluserIntractor from "../../interactors/adminIntractors/getAllUserIntractor.js";
import authenicateAdmin from "../../middlewares/adminAuthentication.js";


const adminLogin = async (req,res,next)=>{
    const {email,password} = req.body
    console.log(email);
    const adminLogin = await adminLoginIntractor(email,password)
    if(adminLogin.status){
        res.cookie('admin_jwt',adminLogin.token,{
            withCrdentials:true,
            httpOnly:false,
            maxAge:86400000
        });
        res.status(200).json({status:true})
    }else{
        res.status(401).json({ status: false, message: adminLogin.message })
    }


    }

const verifyAdmin = async (req,res,next)=>{
   const adminVerification = await authenicateAdmin(req.cookies.admin_jwt)
   if(adminVerification.status){
    res.status(200).json({status:true})
   }else{
    res.status(401).json({ error: 'Unauthorized', status: false });
   }
}

const getAllUsers = async (req,res,next)=>{

  
    const allUsers = await getAlluserIntractor()
    if(allUsers){
        res.status(200).json({data:allUsers})
    }else{
        res.status(500)
    }

    

}

const blockUserByEmail = async (req,res,next)=>{
    const user  = await blockUser(req.body.email)
    if(user.status){
        res.status(200).json({status:true,message:'user has been blocked'})
    }
}


export {adminLogin,verifyAdmin,getAllUsers,blockUserByEmail}