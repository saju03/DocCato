import User from "../../database/model/userModel.js"

const updateProfilePersistance =async (name,phone,image,id)=>{
    try {
        const user = await User.findByIdAndUpdate(id,{userName:name,phone:phone,profileImage:image},{upsert:true})
        if(user){
            return {status:true,}
        }
        return{status:false ,message:'no user update failed' }
    } catch (error) {
        
    }
}

export default updateProfilePersistance