import express from 'express';
import { addSpeciality, adminLogin, blockUserByEmail, getAllApplications, getAllDoctor, getAllSpecialization, getAllUsers, updateApplication, verifyAdmin } from '../controllers/adminController/adminController.js';
const router = express.Router()



router.post('/login',adminLogin)
router.get('/',verifyAdmin)
router.get('/get-all-users',getAllUsers)
router.get('/get-all-doctors',getAllDoctor)
router.get('/get-all-application',getAllApplications)
router.post('/application-update',updateApplication)
router.post('/block-user',blockUserByEmail)
router.post('/add-speciality',addSpeciality)
router.get('/get-all-specializations',getAllSpecialization)
export {router as adminRoutes}