import { Schema, model } from 'mongoose'
import crypto from'crypto'
const applicationSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Name is required'],
    },
   
    refId: {
        type:Schema.Types.ObjectId,
        ref:'doctor'
    },
    speciality: {
        type: String,
       
        required: [true, 'feild is required']

    },
    medicalCouncil: {
        type: String,
       
        required: [true, 'feild is required']

    },
    UUID: {
        type: String,
        default:crypto.randomBytes(32).toString('hex')
    },
    certificateNo: {
        
        type: String,
        required: [true, 'password is required'],
        unique:true
    },
    registrationNo: {
        type: String,
       default:false,
       unique:true
    },
    phone:{
        type:Number,
        default:false
    },
    exp:{
        type:Number,
        default:false
    },

})


const Application = model('Application',applicationSchema,'application')

export default Application