import DocPersistance from '../../persistence/doctorLayer/createDocPersistance.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import handelErrors from '../../middlewares/errorHandelers.js'
import sendMail from '../Helpers/sendEmail.js'
const maxAge = 864000  /* 10 days */


const hashPassword = async (password)=>{
const saltRounds = 10;
try {
   return await bcrypt.hash(password,saltRounds)
 
} catch (error) {
    console.log(error);
} 

}

const createToken = (id)=>{
    try {
        return jwt.sign({id},process.env.JWT_SECRET_KEY || 'PRVR8RR89',{
        expiresIn:maxAge,
    })  
    } catch (error) {
        console.log('tocken error');
    }

}
const createDoctor = async (username,email,password,licence)=>{

 const hashedPassword = await hashPassword(password)


 const addedDoc = await DocPersistance(username,email,hashedPassword,licence)
 if(addedDoc.status){
    const token =  createToken(addedDoc.id)
    const emailverify = await sendMail(addedDoc.email,addedDoc.UUID)
    const doc = {
        token:token,
        status:true
    }
    return doc
 }else{

   const error =  handelErrors(addedDoc)
    error.status = false
   
   return error 
 }
 
}
export default createDoctor