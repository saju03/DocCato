import User from "../../database/model/userModel.js"

const updatePassword =async ( uuid,password )=>{
 try {
    const updagePassword = await User.findOneAndUpdate({UUID:uuid},{password:password}) 
    if(updagePassword){
        return {status:true}
    }
    return{status:false}
 } catch (error) {
    
 }
}

export default updatePassword