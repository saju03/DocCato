import createDoctor from "../../interactors/doctorIntractor/createDoctorIntractor.js"

const doctorSignUp = async (req,res,next)=>{
    const {userName,email,password} = req.body

  try {
      const doc = await createDoctor(userName,email,password)
      console.log(doc);

      if(doc.status){
         
          res.cookie('Doctor_jwt',doc.token,{
              withCrdentials:true,
              httpOnly:false,
              maxAge:864000000         
          });
          res.status(201).json({created:true})
      }else{
         res.status(409).json({created:false,error:doc})
      }
  } catch (error) {
      console.log(error);
     
  }
}
const doctorLogin = (req,res,next)=>{

}
export {doctorLogin,doctorSignUp}