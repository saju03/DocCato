import getAllSpecializationPersistance from "../../persistence/adminLayer/getAllSpecializationPersistance.js"

const getAllSpecializationIntractor =async ()=>{
     const Specializations =await getAllSpecializationPersistance()
     return Specializations
}

export default getAllSpecializationIntractor