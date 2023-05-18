import { doctorSignUp } from '../controllers/doctorController/doctorController.js';
import express from 'express';
const router = express.Router()



router.post('/register',doctorSignUp)
router.post('/login',(req,res)=>{
    console.log(req.body);
})
export {router as doctorRoutes}