import Admin from "../../database/model/adminModel.js"

const adminLoginPersistance = async (email)=>{
    try {
           const admin = await Admin.findOne({email:email})
    if(admin){
        admin.status = true
        return admin
    }
    } catch (error) {
        console.log(error);
    }
 

}
export default adminLoginPersistance