import verifyUserByuid from "../../persistence/userLayer/findUserByUidPersistance.js"
import createToken from "../Helpers/tokenGenerator.js";


verifyUserByuid
const verifyEmail =async (uid)=>{
 const verification = await verifyUserByuid(uid);
 if(verification.status){
    
const Token = await createToken(verification.id)
return {token:Token,status:true}
 }else{
    console.log('email verification error');
 }
}
export default verifyEmail