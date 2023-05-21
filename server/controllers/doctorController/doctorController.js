import submitApplication from "../../interactors/doctorIntractor/applicationIntractor.js";
import createDoctor from "../../interactors/doctorIntractor/createDoctorIntractor.js"
import authDoctor from "../../middlewares/doctorAuthentication.js";

const doctorSignUp = async (req,res,next)=>{
    const {userName,email,password,licence} = req.body

  try {
      const doc = await createDoctor(userName,email,password,licence)
   
      if(doc.status){
          res.cookie('doctor_jwt',doc.token,{
              withCrdentials:true,
              httpOnly:false,
              maxAge:864000000         
          });
          res.status(201).json({created:true, message: 'an email has been sent to your mail ' })
      }else{
         res.status(409).json({created:false,error:doc})
      }
  } catch (error) {
      console.log(error);
     
  }
}
const authenticateDoctor = async (req,res,next)=>{
    const authenticate = await authDoctor(req.cookies.doctor_jwt)
    if(authenticate.status){
        res.status(200).json(authenticate)
    }else{
        res.status(401).json({status:false})
    }
}

const applicationRegistration = async (req,res,next)=>{
const Application = await submitApplication(req.body,req.cookies.doctor_jwt)
if(Application.status){
    res.status(200).json({status:true,message:'application has been submited pleace check your mail'})
}
else{
    res.status(400).json({status:false,message:'application has not been submited'})
}
}
export {authenticateDoctor,doctorSignUp,applicationRegistration } 