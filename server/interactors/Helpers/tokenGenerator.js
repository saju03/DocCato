import jwt from 'jsonwebtoken'
const maxAge = 864000  /* 10 days */

const createToken = (id)=>{
    try {
        return jwt.sign({id},process.env.JWT_SECRET_KEY || 'PRVR8RR89',{
        expiresIn:maxAge,
    })  
    } catch (error) {
        console.log(error);
        console.log('tocken error');
    }

}
export default createToken