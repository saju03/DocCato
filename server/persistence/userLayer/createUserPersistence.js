import User from'../../database/model/userModel.js'

const createUser = async (userName,email,password)=>{
  try {
      const user = await User.create({userName,email,password})
     user.status = true;
     return user
  } catch (error) {
   error.status= false
      return error
    
  }

}
export default createUser