import getApplication from "../../persistence/adminLayer/getAllApplicationsPresistance.js"

const getApplicaions = async ()=>{
const application = await getApplication()
if(application.status){

const allApplication = application.filter((e)=>{
    return !e.isApproved
})

application.status = true

   return allApplication
}

}

export default getApplicaions