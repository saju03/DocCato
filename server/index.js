import express from 'express'
import cookieParser from 'cookie-parser'
import conncetDB from './database/connection.js'
import cors from 'cors'
import {userRouter} from './routes/userRoutes.js'
import { doctorRoutes } from './routes/doctorRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { adminRoutes } from './routes/adminRouter.js'
import { log } from 'console'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export {__dirname}

conncetDB();
const app = express()
app.use(express.static('images'))
app.use(cookieParser())
app.use(express.json());
app.use(
    cors({
    origin:['http://localhost:5173'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials:true,
}))
// for static files rendering 
app.get('/',(req,res)=>{res.status(200)})

app.use('/user',userRouter)
app.use('/doctor',doctorRoutes)
app.use('/admin',adminRoutes)


app.listen(process.env.PORT|| 3000,()=>console.log(`server is running on port ${process.env.PORT}` ))


