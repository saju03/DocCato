import Doctor from '../../database/model/doctorModel.js'

const findDoc = async (id) => {

    try {
        const doctor = await Doctor.findById(id)
        console.log(doctor);
        if (doctor) {
            return ({ status: true, name: doctor.doctorName, email: doctor.email ,access:doctor.doctorAccess})
        } else {
           return ({ status: false })
        }
    } catch (error) {
        console.log(error);
    }


}

export default findDoc;