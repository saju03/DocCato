import Doctor from '../../database/model/doctorModel.js';
import User from '../../database/model/userModel.js';

const createDoctor = async (doctorName,email,password,licence)=>{
  try {

    const userCheck = await User.findOne({email:email})
console.log(userCheck);

    if(userCheck){
     
   const  duplicateUser= {
        status:false,
        code:11000,
        message:''
      }
      return duplicateUser

    }

      const doc = await Doctor.create({doctorName,email,licence,password})
      console.log(doc);
      console.log('adfasdfasdfsdfasdf');
      doc.status = true;
     return doc



  } catch (error) {
   error.status= false
      return error
    
  }

}
export default createDoctor