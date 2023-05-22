import { Schema, model } from 'mongoose'
const specializationSchema = new Schema({
    specialization: {
        type: String,
        required: [true, 'Name is required'],
    }
    
})


const Specialization = model("specialization",specializationSchema,'specialization')
export default Specialization