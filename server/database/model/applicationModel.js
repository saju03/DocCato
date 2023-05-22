import { Schema, model } from 'mongoose'
import uuid from 'uuid-random';
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
        default:uuid()
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
    postedDate:{
        type:Date,
        default:new Date()
    },
    isApproved:{
        type:Boolean,
        default:false
    },

})


const Application = model('Application',applicationSchema,'application')

export default Application