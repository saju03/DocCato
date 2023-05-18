import User from'../../database/model/userModel.js'
import sendEmail from '../../NodeMailer/nodeMailerConfig.js';
import dotenv from 'dotenv'
dotenv.config()
const createUser = async (userName,email,password)=>{
  try {
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