import Doctor from "../../database/model/doctorModel.js"
import User from "../../database/model/userModel.js"

const blockUserByEmailPersistance = async (email)=>{
    const previousAccess = await User.findOne({email:email})
    if(previousAccess){
        const user = await User.findOneAndUpdate({email:email},{access:!previousAccess.access})
        if(user){
            return {status:true}
        }
    }else{
        const previousAccess = await Doctor.findOne({email:email})
        const doctor = await Doctor.findOneAndUpdate({email:email},{doctorAccess:!previousAccess.doctorAccess})
        if(doctor){
            return {status:true}
        }
    }


}
export default blockUserByEmailPersistance