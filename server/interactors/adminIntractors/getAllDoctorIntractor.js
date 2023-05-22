import allDoctors from "../../persistence/adminLayer/getAllDoctorPersistance.js"



const getAllDoctorIntractor = async()=>{
const doctor = await allDoctors()
const filterdDoctor = doctor.filter((e)=>{
  
    return e.consultPermission == true
})

filterdDoctor.map((e)=>{
        
    return (e.password=null,e._id = null)
})
return filterdDoctor
}
export default getAllDoctorIntractor