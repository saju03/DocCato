import { Schema, model } from 'mongoose'
import crypto from'crypto'
const doctorSchema = new Schema({
    doctorName: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required']

    },
    licence: {
        type: String,
        unique: true,
        required: [true, 'licence is required']

    },
    UUID: {
        type: String,
        default:crypto.randomBytes(32).toString('hex')
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    speciality: {
        type: String,
       },
    verified: {
        type: Boolean,
       default:false
    },
    doctorAccess:{
        type:Boolean,
        default:false
    },
    created:{
        type:Date,
        default:new Date()
     },
     consultPermission:{
        type:Boolean,
        default:false
     }

})


const Doctor = model('Doctor',doctorSchema,'doctor')

export default Doctor