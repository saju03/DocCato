import { Schema, model } from 'mongoose'
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
    password: {
        type: String,
        required: [true, 'password is required']
    },

})


const Doctor = model('Doctor',doctorSchema,'doctor')

export default Doctor