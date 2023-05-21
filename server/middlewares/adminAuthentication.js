import jwt from 'jsonwebtoken';
import findAdmin from '../persistence/adminLayer/findAdminByIDPersistance.js';
const authenicateAdmin = async (cookie) => {
    try {
        const decodedCookie = await jwt.decode(cookie);
        const admin = await findAdmin(decodedCookie.id)
        if (admin.status) {
            return admin
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

export default authenicateAdmin