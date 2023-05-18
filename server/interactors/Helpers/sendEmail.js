import sendEmail from "../../NodeMailer/nodeMailerConfig.js"
import dotenv from 'dotenv'
dotenv.config()
const sendMail = async (email,uuid)=>{
    const url = `${process.env.SERVER_URL}user/${uuid}/verify`
    try {
         await sendEmail(email,'VERIFY YOUR EMAIL',url)
         return {status:true,message:'Email has been sent to your mailId'}
    } catch (error) {
        console.log(error);
    }
   
    
}
export default sendMail