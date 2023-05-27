import Application from "../../database/model/applicationModel.js";

const createApplication=async(applicationDetails)=>{
    try {
      const application = await Application.create(applicationDetails)
      console.log(application);
      if(application){
        return {status:true}
      }
      return {status:false}
    } catch (error) {
        console.log(error);
    }
}
export default createApplication