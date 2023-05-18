import {addUser,authenticateUser,userLogin} from '../controllers/userController/userControllers.js'
import express from 'express'
const router = express.Router()



router.get('/',authenticateUser)
router.post('/register',addUser)
router.post('/login',userLogin)


export {router as userRouter}