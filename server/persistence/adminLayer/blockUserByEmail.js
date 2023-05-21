import User from "../../database/model/userModel.js"

const blockUserByEmailPersistance = async (email)=>{
    const prev = await User.findOne({email:email})
const user = await User.findOneAndUpdate({email:email},{access:!prev.access})
if(user){
    return {status:true}
}
}
export default blockUserByEmailPersistance