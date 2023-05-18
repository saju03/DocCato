import bcrypt from 'bcrypt'
const comparePassword = async (inputPassword,userPassword)=>{
    const status = await bcrypt.compare(inputPassword, userPassword)
    return status
}

export default comparePassword