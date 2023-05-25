import findUser from "../../persistence/userLayer/findUserByEmailPersistence.js"
import { sentForgotEmailLink } from "../Helpers/sendEmail.js"

const forgorPasswordRecovery = async (email)=>{
    const checkUser = await findUser(email)
    if(checkUser){
        const sentMail =  await sentForgotEmailLink(checkUser.email,checkUser.UUID)
        if(sentMail.status){
            return {status:true,message:'Password recovery link has been sent to your email ID'}
        }
    }
}

export default forgorPasswordRecovery