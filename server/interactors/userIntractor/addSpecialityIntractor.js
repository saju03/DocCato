import createSpeciality from "../../persistence/adminLayer/createNewSpecilityPersistance.js"

const addSpecialityIntractor = async (specialization)=>{

   const addNewSpecialization= await createSpeciality(specialization)
 return addNewSpecialization

}

export default addSpecialityIntractor