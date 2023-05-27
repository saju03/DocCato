const handelErrors = (err) =>{


    let errors ={email:'',password:''}

    if(err.code===11000){
        errors.email = 'email is already regestered Do Login'
    }

    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    if(err.message.includes('doctor validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    if(err.message=='incorrect password'){
        errors.password = 'incorrect password'

    }
    if(err.message=='incorrect Email'){
        errors.password = 'incorrect Email'

    }
    console.log(errors);
    return errors
}

export default handelErrors