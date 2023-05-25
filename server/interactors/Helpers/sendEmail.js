import sendEmail from "../../Utils/NodeMailer/nodeMailerConfig.js"
import dotenv from 'dotenv'
dotenv.config()
const sendMail = async (email,uuid)=>{
    const url = `${process.env.SERVER_URL}user/${uuid}/verify`
    try {
         await sendEmail(email,'VERIFY YOUR EMAIL',url)
         return {status:true,message:'Email has been sent to your Mail Please Check It'}
    } catch (error) {
        console.log(error);
    }
   
}

const sendDoctorApplicationApprovedMail = async(email)=>{
    console.log(email);

    try {
        await sendEmail(email,'DOCCATO ,YOUR ACCOUNT HAS BEEN VERIFIED','ACCOUNT HAS BEEN VERIFIED WELCOME ABORD DOCTOR')
        console.log('email sent approved');
        return {status:true}
    } catch (error) {
        console.log();
    }

}
const sendDoctorApplicationDeclinedMail = async(email)=>{

    try {
        await sendEmail(email,'DOCCATO ,YOUR APPLICATION HAS BEEN REJECTED ','APPLICATION HAS BEEN REJECTED BY OUR TEAM')
        console.log('email sent DECLINED');
        return {status:true}
    } catch (error) {
        console.log(error);
    }

}

const sentForgotEmailLink = async (email,uuid)=>{

    const url = `http://localhost:5173/user/${uuid}/passwordRecovery`

    try {
        await sendEmail(email,'FORGOT PASSWORD RECOVERY ',url)
        console.log('FORGOT PASSWORD EMAIL SENT');
        return({status:true})
    } catch (error) {
        console.log(error);
    }


}

export{ sendMail, sendDoctorApplicationDeclinedMail,sendDoctorApplicationApprovedMail,sentForgotEmailLink}