import createUserInteractor from '../../interactors/userIntractor/userSignUpIntractor.js';
import verifyUserCredentials from'../../interactors/userIntractor/userLoginIntractor.js';
import userAuthentication from'../../middlewares/userAuthentication.js';
import jwt from'jsonwebtoken';

const addUser = async (req,res,next)=>{
    const {userName,email,password} = req.body
    try {
        const user = await createUserInteractor(userName,email,password)
        console.log(user);

        if(user.status){
           
            res.cookie('user_jwt',user.token,{
                withCrdentials:true,
                httpOnly:false,
                maxAge:864000000         
            });
            res.status(201).json({created:true})
        }else{
            console.log(user);
           res.status(409).json({created:false,error:user})
        }
        
     
   
    } catch (error) {
        console.log(error);
       
    }

}

const authenticateUser = async (req,res,next)=>{
    console.log(req);
const user = await userAuthentication(req.cookies.user_jwt)
if(user){
    res.status(200).json({message:'user authentication success ',status:true,name:user.name,email:user.email})
}else{
    res.status(401).json({ error: 'Unauthorized',status:false });
}
}

const userLogin = async(req,res,next)=>{


    const verifyCredentials = await verifyUserCredentials(req.body)
        if(verifyCredentials.status){
            
          
                try {
                    const token = jwt.sign({id:verifyCredentials.id},process.env.JWT_SECRET_KEY || 'PRVR8RR89',{
                    expiresIn:864000,
                 
                })   
                res.cookie('user_jwt',token,{
                    withCrdentials:true,
                    httpOnly:false,
                    maxAge:864000000         
                });
                res.status(200).json({status:true})
                } catch (error) {
                    console.log('tocken error');
                    console.log(error);
                }
            
         
        }else{
            if(verifyCredentials.message == 'no user found'){
            res.status(404).json({status:false,message:verifyCredentials.message})
        }
        if(verifyCredentials.message == 'incorrect password'){
            res.status(401).json({status:false,message:verifyCredentials.message})
        }
    
    }
        
   
}

export {addUser,userLogin,authenticateUser}