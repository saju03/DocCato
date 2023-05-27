import { Schema, model } from 'mongoose'
import crypto from 'crypto'
const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required']

    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    profileImage: {
        type: String,
       
    },
    UUID: {
        type: String,
        default:crypto.randomBytes(32).toString('hex')
    },
    verified: {
        type: Boolean,
        default:false
     },
     created:{
        type:Date,
        default:new Date()
     },
     access:{
        type:Boolean,
        default:true
     },
     phone:{
        type:Number,
        default:''
  
     },

})


const User = model("User",userSchema,'user')
export default User