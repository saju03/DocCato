import User from '../../database/model/userModel.js'

const getUser = async(email)=>{
  try {
      const user = await User.findOne({email:email})
  if(user){
    user.status=true
return user
    
  }else{
    return {status:false}
  }
  } catch (error) {
    return ({staus:false})
  }

}
export default getUser