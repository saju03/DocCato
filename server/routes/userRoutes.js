
import store from '../Utils/multer/multer.js'
import { getAllDoctor } from '../controllers/adminController/adminController.js'
import {addUser,authenticateUser,userLogin, verifyUser,updateProfile, forgotPasswordRecovery} from '../controllers/userController/userControllers.js'
import express from 'express'

const router = express.Router()



router.get('/',authenticateUser)
router.post('/register',addUser)
router.post('/login',userLogin)
router.get('/:uuid/verify',verifyUser)
router.get('/getAlldoctor',getAllDoctor)
router.post('/update-profile',store.any('image'),updateProfile)
router.post('/forgot-password-recovery',forgotPasswordRecovery)

export {router as userRouter}