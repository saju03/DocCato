import updateApplication from "../../persistence/adminLayer/updateApplicationPersistance.js"
import { sendDoctorApplicationApprovedMail, sendDoctorApplicationDeclinedMail } from "../Helpers/sendEmail.js"

const applicationIntractor = async (id,approved)=>{

    try {
       const applicationUpdate = await updateApplication(id,approved)
       if(applicationUpdate.status){
        if(applicationUpdate.Approved){
        const emailStatus =  await sendDoctorApplicationApprovedMail(applicationUpdate.email)
        if(emailStatus){
            return {status:true,message:'application has been approved'}
        }
        }else{
            
            const emailStatus =  await sendDoctorApplicationDeclinedMail(applicationUpdate.email)
            if(emailStatus){
                return {status:true,message:'application has been Declined'}
            }
        }
       }
    } catch (error) {
        
    }


}
export default applicationIntractor