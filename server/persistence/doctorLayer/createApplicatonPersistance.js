import Application from "../../database/model/applicationModel.js";

const createApplication=async(applicationDetails)=>{


    try {
      const application = await Application.create(applicationDetails)
      if(application){
        return {status:true}
      }
    } catch (error) {
        console.log(error);
    }
}
export default createApplication