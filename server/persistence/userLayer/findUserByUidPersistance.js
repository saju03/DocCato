import Doctor from "../../database/model/doctorModel.js";
import User from "../../database/model/userModel.js";

const verifyUserByuid =async (id)=>{
try {
    const user = await User.findOne({UUID:id.uuid})
 
 
    const doctor = await Doctor.findOne({UUID:id.uuid})
    console.log(doctor);
    if(user){
        await User.findOneAndUpdate({UUID:id.uuid},{verified:true})
        return {status:true,id:user.id,isDoc:false}
    }
    if(doctor){
        await Doctor.findOneAndUpdate({UUID:id.uuid},{verified:true})
        return {status:true,id:doctor.id,isDoc:true}
    }
    else{  
        return {status:false}
    }
} catch (error) {
    console.log(error);
}
}

export default verifyUserByuid