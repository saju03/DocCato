import { Schema, model } from 'mongoose'
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
    emailVerification: {
        type: Boolean,
     },

})


const User = model("User",userSchema,'user')
export default User