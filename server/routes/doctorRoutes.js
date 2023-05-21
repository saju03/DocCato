import { doctorSignUp,authenticateDoctor, applicationRegistration } from '../controllers/doctorController/doctorController.js';
import express from 'express';
const router = express.Router()



router.post('/register',doctorSignUp)
router.get('/',authenticateDoctor)
router.post('/register-application',applicationRegistration)
export {router as doctorRoutes}