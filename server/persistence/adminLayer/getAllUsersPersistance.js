import User from "../../database/model/userModel.js";

const allUsers = async ()=>{
    const users = await User.find()
    users.map((e)=>{
        return (e.password=null,e._id = null)
    })
    return users 
   
}

export default allUsers