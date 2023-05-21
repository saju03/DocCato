import Doctor from '../../database/model/doctorModel.js'
import User from '../../database/model/userModel.js'

const getUser = async(email)=>{
  try {
      const user = await User.findOne({email:email})
      const doctor = await Doctor.findOne({email:email})
  if(user){
    user.status=true
return user
    
  }
  else if(doctor){
    doctor.isDoc = true
    doctor.status=true
    return doctor
  }
  else
  {
    return {status:false}
  }
  } catch (error) {
    return ({staus:false})
  }

}
export default getUser