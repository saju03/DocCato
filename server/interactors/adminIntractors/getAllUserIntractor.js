import allUsers from "../../persistence/adminLayer/getAllUsersPersistance.js"


const getAlluserIntractor = async()=>{
const users = await allUsers()
return users
}
export default getAlluserIntractor