import express from 'express';
import { adminLogin, blockUserByEmail, getAllUsers, verifyAdmin } from '../controllers/adminController/adminController.js';
const router = express.Router()



router.post('/login',adminLogin)
router.get('/',verifyAdmin)
router.get('/get-all-users',getAllUsers)
router.post('/block-user',blockUserByEmail)
export {router as adminRoutes}