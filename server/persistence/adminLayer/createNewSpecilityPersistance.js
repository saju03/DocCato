import Specialization from "../../database/model/specializationModel.js"

const createSpeciality = async (specialization)=>{
       try {
         const newSpeciality = await Specialization.create(specialization)
         console.log(newSpeciality);
    if(newSpeciality){
        return {status:true,message:'created'}
    }
    else{
        return {status:false}
    }
    } catch (error) {
       if(error.code==11000){
           return {status:false ,message:'duplicate value found'}
       }

  
    }
   
}

export default createSpeciality