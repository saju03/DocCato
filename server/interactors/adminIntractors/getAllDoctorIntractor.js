import allDoctors from "../../persistence/adminLayer/getAllDoctorPersistance.js"



const getAllDoctorIntractor = async()=>{
const doctor = await allDoctors()

const doctors = doctor.filter((e)=>{
   return (e.consultPermission)
})

doctors.map((e)=>{
        
    return (e.password=null,e._id = null)
})
return doctors
}
export default getAllDoctorIntractor