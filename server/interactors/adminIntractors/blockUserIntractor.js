import blockUserByEmailPersistance from "../../persistence/adminLayer/blockUserByEmail.js"


const blockUser =async (email)=>{
const blockedUser = await blockUserByEmailPersistance(email)
if(blockedUser.status){
    return {status:true}
}
}

export default blockUser