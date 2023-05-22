import Doctor from "../../database/model/doctorModel.js"



const allDoctors= async ()=>{
    const doctor = await Doctor.find()

    return doctor 
   
}

export default allDoctors