import { Schema, model } from 'mongoose'
const AdminSchema = new Schema({
    Name: {
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
    }
})


const Admin = model("admin",AdminSchema,'admin')
export default Admin