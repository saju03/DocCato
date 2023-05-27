import updatePassword from "../../persistence/userLayer/updatePasswordPersistance.js"
import hashPassword from "../Helpers/hashPassword.js"

const resetPasswordIntractor= async(uuid,password)=>{

    const hashedpassword = await hashPassword(password)
    const updateUserPassword =await updatePassword(uuid,hashedpassword)
 
        return updateUserPassword

   

}

export default resetPasswordIntractor