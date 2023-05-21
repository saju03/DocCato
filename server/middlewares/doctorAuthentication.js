import jwt from 'jsonwebtoken';
import findDoc from '../persistence/doctorLayer/findByIdPersistance.js';

const authDoctor =async (cookie)=>{
    const decodedCookie = await jwt.decode(cookie);
    const doctor = await findDoc(decodedCookie.id)
    if(doctor.status){
        console.log(doctor);
        return doctor
    }else{
        return {status:false}
    }
}
export default authDoctor