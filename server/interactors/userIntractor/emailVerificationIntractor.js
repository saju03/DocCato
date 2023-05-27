import verifyUserByuid from "../../persistence/userLayer/findUserByUidPersistance.js"
import createToken from "../Helpers/tokenGenerator.js";


verifyUserByuid
const verifyEmail =async (uid)=>{
 const verification = await verifyUserByuid(uid);
 if(verification.status){
    if(verification.isDoc){
      const Token = await createToken(verification.id)
return {token:Token,status:true,isDoc:true}
    }else{
      const Token = await createToken(verification.id)
return {token:Token,status:true,isDoc:false}
    }

 }else{
    console.log('email verification error');

    return {status:true}
 }
}
export default verifyEmail