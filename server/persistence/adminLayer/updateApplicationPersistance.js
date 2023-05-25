import mongoose from "mongoose";
import Application from "../../database/model/applicationModel.js";
import Doctor from "../../database/model/doctorModel.js";

const updateApplication = async (id,approved)=>{

    try {
        if(approved){
            const application = await Application.findByIdAndUpdate(id,{isApproved:true})
        
            if(application){
                console.log(application.refId);
         
                const doctor  = await Doctor.findByIdAndUpdate(application.refId,{consultPermission:true})
                console.log(doctor);
                if(doctor){
                    return {status:true,Approved:true,email:doctor.email}
                }
                
            }
        
        }
    else{
            const application = await Application.findByIdAndUpdate(id,{isApproved:true})
           await Application.findByIdAndUpdate(id,{isDeclined:true},{upsert:true})
            if(application){
                console.log(application.refId);
                 const doctor  = await Doctor.findByIdAndUpdate(application.refId,{consultPermission:false})
                console.log(doctor);
                if(doctor){
                    return {status:true,Approved:false,email:doctor.email}
                }
                
            }

        }
    } catch (error) {
        console.log(error);
    }
     

}

export default updateApplication