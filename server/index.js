import express from 'express'
import cookieParser from 'cookie-parser'
import conncetDB from './database/connection.js'
import cors from 'cors'
import {userRouter} from './routes/userRoutes.js'
import { doctorRoutes } from './routes/doctorRoutes.js'

conncetDB();
const app = express()
app.use(cookieParser())
app.use(express.json());
app.use(
    cors({
    origin:['http://localhost:5173'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials:true,
}))

app.use('/',userRouter)
app.use('/doctor',doctorRoutes)


app.listen(process.env.PORT|| 3000,()=>console.log(`server is running on port ${process.env.PORT}` ))


