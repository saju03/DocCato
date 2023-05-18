import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const sendEmail = async (email,subject,text)=>{

    // SERVER_URL= http://localhost:3000
    // HOST = smtp.ethereal.email
    // SERVICE = gmail
    // EMAIL_PORT = 587
    // SECURE = true
    // EMAIL = doccatohealth@gmail.com
    // PASSWORD = doccato@0752

console.log(email,subject,text);
try {
    const transpoter = nodemailer.createTransport({
        host:process.env.HOST|| 'smtp.ethereal.email',
        service:process.env.SERVICE||'gmail',
        port:Number(process.env.EMAIL_PORT)||587,
        secure:Boolean(process.env.SECURE)||true,
        auth:{
            user:process.env.EMAIL||'doccatohealth@gmail.com',
            pass:process.env.PASSWORD||'ljlwtwlihugcrims'
        }
    })
    await transpoter.sendMail({
        from:process.env.EMAIL,
        to:email,
        subject:subject,
        text:text
    })
    console.log('email send');
} catch (error) {
    console.log(error);
   
}

}

export default sendEmail