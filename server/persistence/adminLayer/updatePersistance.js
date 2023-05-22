import Application from "../../database/model/applicationModel.js";
import Doctor from "../../database/model/doctorModel.js";

const updateApplication = async (id,approved)=>{

    try {
        if(approved){
            const application = await Application.findById(id)
            console.log(application);
        }
    } catch (error) {
        
    }
     

}

export default updateApplication