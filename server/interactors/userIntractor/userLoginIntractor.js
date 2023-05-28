import getUser from "../../persistence/userLayer/findUserByEmailPersistence.js"
import comparePassword from "../Helpers/comparePassword.js"


const verifyUserCredentials = async (credentials) => {
    const user = await getUser(credentials.email)
    if (user.status) {
        const status = await comparePassword(credentials.password, user.password)
        if (status) {
            if (user.isDoc) {
                if (user.doctorAccess) {
                    return ({ status: true, id: user._id, isDoc: true })
                } else {
                    return ({ status: false, message: 'Your Account Has Been blocked' })
                }

            } else {
                if (user.access) {
                    return ({ status: true, id: user._id, isDoc: false })
                } else {
                    return ({ status: false, message: 'Your Account Has Been blocked' })
                }

            }

        } else {
            return ({ status: false, message: 'incorrect password' })
        }

    } else {
        console.log('no user');
        return ({ message: 'no user found', status: false })

    }


}
export default verifyUserCredentials