import jwt from 'jsonwebtoken';
import findUser from '../persistence/userLayer/findUserByIdPersistance.js';
const authenicateUser = async (cookie) => {
    try {
        const decodedCookie = await jwt.decode(cookie);
          const userDetails = await findUser(decodedCookie.id)
        if (userDetails.status) {
            return userDetails
        } else {
            return { status: false }
        }
    } catch (error) {
        if (error) {
            console.log(error);
            return { status: false }
        }
    }

}

export default authenicateUser