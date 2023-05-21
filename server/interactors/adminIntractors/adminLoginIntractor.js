import adminLoginPersistance from "../../persistence/adminLayer/findAdminByEmail.js"
import comparePassword from "../Helpers/comparePassword.js"
import createToken from "../Helpers/tokenGenerator.js"

const adminLoginIntractor = async (email,password)=>{

    const getAdmin = await adminLoginPersistance(email)
    if(getAdmin.status){
         const compare = await comparePassword(password,getAdmin.password)
         if(compare){
            const token = await createToken(getAdmin.id)
            return  {status:true,token:token,}
         }else{
            return {status:false,message:'incorrect password'}
         }
    }else{
        return {status:false,message:'incorrect email'}
    }
   

}
export default adminLoginIntractor