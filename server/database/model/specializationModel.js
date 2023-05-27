import { Schema, model } from 'mongoose'
const specializationSchema = new Schema({
    specialization: {
        type: String,
        unique:true
    }
    
})


const Specialization = model("specialization",specializationSchema,'specialization')
export default Specialization