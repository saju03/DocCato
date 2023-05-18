import User from '../../database/model/userModel.js'

const findUser = async (id) => {
    try {
        const user = await User.findById(id)
        if (user) {
            return ({ status: true, name: user.userName, email: user.email })
        } else {
           return ({ status: false })
        }
    } catch (error) {
        console.log(error);
    }


}

export default findUser;