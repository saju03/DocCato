import createUserInteractor from '../../interactors/userIntractor/userSignUpIntractor.js';
import verifyUserCredentials from '../../interactors/userIntractor/userLoginIntractor.js';
import userAuthentication from '../../middlewares/userAuthentication.js';
import jwt from 'jsonwebtoken';
import verifyEmail from '../../interactors/userIntractor/emailVerificationIntractor.js';
import { __dirname } from '../../index.js';
import updateProfileIntractor from '../../interactors/userIntractor/updateProfileIntractor.js';
import forgorPasswordRecovery from '../../interactors/userIntractor/forgotPasswordRecoveryIntractor.js';

const addUser = async (req, res, next) => {
    const { userName, email, password } = req.body
    try {
        const user = await createUserInteractor(userName, email, password)


        if (user.status) {

            res.cookie('user_jwt', user.token, {
                withCrdentials: true,
                httpOnly: false,
                maxAge: 864000000
            });
            res.status(201).json({ created: true, message: 'an email has been sent to your mail ' })
        } else {
            console.log(user);
            res.status(409).json({ created: false, error: user })
        }



    } catch (error) {
        console.log(error);

    }

}

const authenticateUser = async (req, res, next) => {

    const user = await userAuthentication(req.cookies.user_jwt)
    console.log(user);
    if (user) {
        res.status(200).json({ message: 'user authentication success ', status: true, name: user.name, email: user.email,phone:user?.phone,profileImage:user?.img })
    } else {
        res.status(401).json({ error: 'Unauthorized', status: false });
    }
}

const userLogin = async (req, res, next) => {


    const verifyCredentials = await verifyUserCredentials(req.body)
    if (verifyCredentials.status) {


        try {
            const token = jwt.sign({ id: verifyCredentials.id }, process.env.JWT_SECRET_KEY || 'PRVR8RR89', {
                expiresIn: 864000,

            })
            if (verifyCredentials.isDoc) {
                res.cookie('doctor_jwt', token, {
                    withCrdentials: true,
                    httpOnly: false,
                    maxAge: 864000000
                });
                res.status(200).json({ status: true, isDoc: true })

            } else {
                res.cookie('user_jwt', token, {
                    withCrdentials: true,
                    httpOnly: false,
                    maxAge: 864000000
                });
                res.status(200).json({ status: true, isDoc: false })

            }


        } catch (error) {
            console.log('tocken error');
            console.log(error);
        }


    } else {
        if (verifyCredentials.message == 'no user found') {
            res.status(404).json({ status: false, message: verifyCredentials.message })
        }
        if (verifyCredentials.message == 'incorrect password') {
            res.status(401).json({ status: false, message: verifyCredentials.message })
        }

    }
}


const verifyUser = async (req, res, next) => {

    const Verification = await verifyEmail(req.params)
    if (Verification.status) {

        if(Verification.isDoc){
            res.cookie('doctor_jwt', Verification.token, {
                withCrdentials: true,
                httpOnly: false,
                maxAge: 864000000
            });
       
            res.sendFile(__dirname + '/public/emailverifieddoc.html');
        }else{
              res.cookie('user_jwt', Verification.token, {
            withCrdentials: true,
            httpOnly: false,
            maxAge: 864000000
        });
        
        res.sendFile(__dirname + '/public/emailverified.html');
        }


    } else {
        res.json({ res: 'time expired' })
    }


}

const updateProfile= async (req,res,next)=>{
        const token = req.cookies.user_jwt
     const {name,phone} = req.body 
     
     const image = req.files[0].filename
     console.log(image);
      const updatedProfile = await updateProfileIntractor(name,phone,image,token) 
     if(updatedProfile.status){
        res.status(200).json({status:true,message:'profile updated successfully'})
     }
     else{
        res.status(500).json({message:'update failed'})
     }
 }

 const forgotPasswordRecovery =async (req,res,next)=>{

    const passwordRecovery =await forgorPasswordRecovery(req.body.email)
    if(passwordRecovery.status){
        res.status(200).json(passwordRecovery)
    }else{
        res.status(500)
    }
 }
 


export { addUser, userLogin, authenticateUser, verifyUser ,updateProfile,forgotPasswordRecovery}