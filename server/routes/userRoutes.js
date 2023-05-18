import {addUser,authenticateUser,userLogin, verifyUser} from '../controllers/userController/userControllers.js'
import express from 'express'
const router = express.Router()



router.get('/',authenticateUser)
router.post('/register',addUser)
router.post('/login',userLogin)
router.get('/:uuid/verify',verifyUser)


export {router as userRouter}