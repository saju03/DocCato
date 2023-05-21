import Doctor from '../../database/model/doctorModel.js'
import User from'../../database/model/userModel.js'
import dotenv from 'dotenv'
dotenv.config()
const createUser = async (userName,email,password)=>{
  try {
    const doctorCheck = await Doctor.findOne({email:email})
    if(doctorCheck){
  doctorCheck =  { status: false,
      code:11000,
      }
      return doctorCheck
    }
      const user = await User.create({userName,email,password})
     user.status = true;
     return user
  } catch (error) {
    console.log(error);
   error.status= false
      return error
    
  }

}
export default createUser