import userPersistance from '../../persistence/userLayer/createUserPersistence.js';
import handelErrors from '../../middlewares/errorHandelers.js';
import createToken from '../Helpers/tokenGenerator.js';
import hashPassword from '../Helpers/hashPassword.js';
import {sendMail} from '../Helpers/sendEmail.js';


const createUser = async (username,email,password)=>{

 const hashedPassword = await hashPassword(password)


 const addedUser = await userPersistance(username,email,hashedPassword)
 console.log(addedUser);
 if(addedUser.status){
    const emailverify = await sendMail(addedUser.email,addedUser.UUID)
    const token =  createToken(addedUser.id)
    const user = {
        token:token,
        status:true
    }
    return user
 }else{

   const error =  handelErrors(addedUser)
    error.status = false
   
   return error 
 }
 
}
export default createUser