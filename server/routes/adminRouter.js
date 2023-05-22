import express from 'express';
import { adminLogin, blockUserByEmail, getAllApplications, getAllDoctor, getAllUsers, updateApplication, verifyAdmin } from '../controllers/adminController/adminController.js';
const router = express.Router()



router.post('/login',adminLogin)
router.get('/',verifyAdmin)
router.get('/get-all-users',getAllUsers)
router.get('/get-all-doctors',getAllDoctor)
router.get('/get-all-application',getAllApplications)
router.post('/application-update',updateApplication)
router.post('/block-user',blockUserByEmail)
export {router as adminRoutes}