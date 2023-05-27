import adminLoginIntractor from "../../interactors/adminIntractors/adminLoginIntractor.js";
import applicationIntractor from "../../interactors/adminIntractors/applicationUpdateIntractor.js";
import blockUser from "../../interactors/adminIntractors/blockUserIntractor.js";
import getApplicaions from "../../interactors/adminIntractors/getAllApplicationsIntractor.js";
import getAllDoctorIntractor from "../../interactors/adminIntractors/getAllDoctorIntractor.js";
import getAlluserIntractor from "../../interactors/adminIntractors/getAllUserIntractor.js";
import addSpecialityIntractor from "../../interactors/userIntractor/addSpecialityIntractor.js";
import getAllSpecializationIntractor from "../../interactors/userIntractor/specializationIntractor.js";
import authenicateAdmin from "../../middlewares/adminAuthentication.js";


const adminLogin = async (req, res, next) => {
    const { email, password } = req.body
    console.log(email);
    const adminLogin = await adminLoginIntractor(email, password)
    if (adminLogin.status) {
        res.cookie('admin_jwt', adminLogin.token, {
            withCrdentials: true,
            httpOnly: false,
            maxAge: 86400000
        });
        res.status(200).json({ status: true })
    } else {
        res.status(401).json({ status: false, message: adminLogin.message })
    }


}

const verifyAdmin = async (req, res, next) => {
    const adminVerification = await authenicateAdmin(req.cookies.admin_jwt)
    if (adminVerification.status) {
        res.status(200).json({ status: true })
    } else {
        res.status(401).json({ error: 'Unauthorized', status: false });
    }
}

const getAllUsers = async (req, res, next) => {


    const allUsers = await getAlluserIntractor()
    if (allUsers) {
        res.status(200).json({ data: allUsers })
    } else {
        res.status(500)
    }



}

const getAllDoctor = async (req, res, next) => {


    const allDoctors = await getAllDoctorIntractor()
    if (allDoctors) {
        res.status(200).json({ data: allDoctors })
    } else {
        res.status(500)
    }



}


const blockUserByEmail = async (req, res, next) => {
    const user = await blockUser(req.body.email)
    if (user.status) {
        res.status(200).json({ status: true, message: 'user has been blocked' })
    }
    else {
        res.status(500)
    }
}

const getAllApplications = async (req, res, next) => {
    const applications = await getApplicaions()

    if (applications) {
        res.status(200).json({ status: true, data: applications })
    }
    else {
        res.status(500)
    }
}

const updateApplication = async (req, res, next) => {

    const { id, approved } = req.body
    const applicaionUpdate = await applicationIntractor(id, approved)
    if (applicaionUpdate.status) {
        res.status(200).json({ applicaionUpdate })
    }
    else {
        res.status(500)
    }

}

const addSpeciality = async (req, res, next) => {
    const specialization = req.body
    const addNewSpecialization = await addSpecialityIntractor(specialization)
    try {
        if (addNewSpecialization.status) {
            res.status(200).json(addNewSpecialization)
        } else {
            res.status(409).json(addNewSpecialization)
        }
    } catch (error) {
        console.log(error);
    }


}

const getAllSpecialization = async (req,res,next)=>{
        const allSpecialization   = await getAllSpecializationIntractor()
        if(allSpecialization){
            res.status(200).json(allSpecialization)
        }
}


export { adminLogin, verifyAdmin, getAllUsers, blockUserByEmail, getAllDoctor, getAllApplications, updateApplication, addSpeciality,getAllSpecialization }