import jwt from "jsonwebtoken"
import createApplication from "../../persistence/doctorLayer/createApplicatonPersistance.js"

const submitApplication =async  (applicationDetails,cookie)=>{
const decodeToken = jwt.decode(cookie)
const doctorId = decodeToken.id
applicationDetails.refId=doctorId
const application =await createApplication(applicationDetails)
if(application.status){
    return {status:true}
}

}
export default submitApplication