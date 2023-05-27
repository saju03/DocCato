import Specialization from "../../database/model/specializationModel.js"

const getAllSpecializationPersistance  =async()=>{

  const specializations =  await Specialization.find()
  return specializations
} 

export default getAllSpecializationPersistance