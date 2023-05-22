import Application from "../../database/model/applicationModel.js";

const getApplication = async ()=>{
    try {
        const applications = await Application.find()
        if(applications){
            applications.status = true
            return applications
            
        }else{
            return {status:true ,message:'no pending applicaion'}
        }

    } catch (error) {
        console.log(error);
    }
    

}

export default getApplication