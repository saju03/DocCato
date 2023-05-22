import getApplication from "../../persistence/adminLayer/getAllApplicationsPresistance.js"

const getApplicaions = async ()=>{
const application = await getApplication()
if(application.status){
    application.filter((e)=>{
        
    })
    return application
}

}

export default getApplicaions