
import store from '../Utils/multer/multer.js'
import { getAllDoctor } from '../controllers/adminController/adminController.js'
import {addUser,authenticateUser,userLogin, verifyUser,updateProfile, forgotPasswordRecovery, resetPassword} from '../controllers/userController/userControllers.js'
import express from 'express'

const router = express.Router()



router.get('/',authenticateUser)
router.post('/register',addUser)
router.post('/login',userLogin)
router.get('/:uuid/verify',verifyUser)
router.get('/getAlldoctor',getAllDoctor)
router.post('/update-profile',store.any('image'),updateProfile)
router.post('/forgot-password-recovery',forgotPasswordRecovery)
router.post('/passwordRecovery',resetPassword)
export {router as userRouter}