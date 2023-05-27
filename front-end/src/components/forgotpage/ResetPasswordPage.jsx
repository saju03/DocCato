import { Button, Label, TextInput } from "flowbite-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import swal from "sweetalert"
import Axios from "../../../axios"

function ResetPasswordPage() {
    const navigate = useNavigate()
    const params = useParams()
    const[password,setPassword]= useState()
    const[confirmPassword,setConfirmPassword]= useState()
    const[err,setErr]= useState({
        passwordErr:'',
        confirmPasswordErr:''
    })
const passwordCheck = (e)=>{
    console.log(params);
    setPassword(e.target.value)


 
          if(password.length<5){
        setErr({...err,passwordErr:'password should be 5 or more letter'})
    }else{
        setErr({...err,passwordErr:''})
        
    }

  
    
}

const handleSubmit =async (e)=>{
    e.preventDefault()
    if(password!==confirmPassword){
        setErr({...err,confirmPasswordErr:'both password should be same'})
    }else{


        try {
        const {data} = await Axios.post('/user/passwordRecovery',{password,params},{withCredentialsa:false})

        if(data.status){

            swal(data.message)
            navigate('/login')
        }else{
            swal('error encounterd please try again')
            navigate('/login')
        }
        } catch (error) {
         console.log(error);   
        }
        setErr({...err,confirmPasswordErr:''})
    }

}


  return (
    <div className="max-w-xl mx-auto">
        <form className="flex flex-col gap-4 justify" onSubmit={handleSubmit}>
  <div>
    <div className="mb-2 block">
    <span className="text-red-600">{err.passwordErr}</span>
      <Label
        htmlFor="password"
        value="password"
      />
    </div>
    <TextInput
      id="password"
      type="password"
      placeholder="password"
      required={true}
      onChange={passwordCheck}
    />
  </div>
  <div>
    <div className="mb-2 block">
        <span className="text-red-600">{err.confirmPasswordErr}</span>
      <Label
        htmlFor="password1"
        value="Confirm password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
      onChange={(e)=>{setConfirmPassword(e.target.value)}}
    />
  </div>
  
  <Button type="submit">
    Submit
  </Button>
</form>
    </div>
  )
}

export default ResetPasswordPage