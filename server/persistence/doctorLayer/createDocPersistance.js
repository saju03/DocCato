import Doctor from '../../database/model/doctorModel.js';

const createDoctor = async (doctorName,email,password)=>{
  try {
      const doc = await Doctor.create({doctorName,email,password})
      doc.status = true;
     return doc
  } catch (error) {
   error.status= false
      return error
    
  }

}
export default createDoctor