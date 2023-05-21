import Admin from '../../database/model/adminModel.js'

const findAdmin = async (id) => {
    try {
        const admin = await Admin.findById(id)
        if (admin) {
            return ({ status: true})
        } else {
           return ({ status: false })
        }
    } catch (error) {
        console.log(error);
    }


}

export default findAdmin;