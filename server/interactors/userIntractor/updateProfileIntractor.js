import jwt from "jsonwebtoken"
import updateProfilePersistance from "../../persistence/userLayer/updateProfilePersistance.js"

const updateProfileIntractor = async  (name,phone,image,token)=>{
    const {id} = await jwt.decode(token)
 
    const profileUpdate = await updateProfilePersistance(name,phone,image,id)
    if(profileUpdate.status){
        return {status:true }
    }else{
        return {status:false ,profileUpdate}
    }
}
export default updateProfileIntractor