import User from "../../database/model/userModel.js";

const verifyUserByuid =async (id)=>{
try {
    const user = await User.findOne({UUID:id.uuid})
    if(user){
        await User.findOneAndUpdate({UUID:id.uuid},{verified:true})
        return {status:true,id:user.id}
    }else{  
        return {status:false}
    }
} catch (error) {
    console.log(error);
}
}

export default verifyUserByuid