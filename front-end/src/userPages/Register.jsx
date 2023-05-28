import  { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../index.css'
import swal from 'sweetalert';
import {  RiseLoader } from "react-spinners";

function Register ()  {

    
 const [width, setWidth] = useState(window.innerWidth)
 const [isDoc,setDoc] = useState(false)
 const [loading,setLoading] = useState(false)

    window.addEventListener('resize', function(){
        setWidth(window.innerWidth)
    })

    const [userValues,setValues] = useState({
        userName:'',
        email:'',
        password:'',
        licence:''
    })

    const generateError = (err) => {
       swal(err)
      }
    


   const handelSubmit = async(e) =>{
    e.preventDefault()
    if(userValues.password.length < 5){
        swal('password should contain 5 letters')
        
    }
    else{
        try {
            if(isDoc){   
                setLoading(true)
                const  {data}  = await axios.post('http://localhost:3000/doctor/register',{...userValues},{withCredentials:true})
               
                if(data.created){
                    setLoading(false)
                    swal(data.message)
                   setValues({email:"",password:"",userName:''})
                   
                }
               
            }else{       
                setLoading(true)       
                const  {data}  = await axios.post('http://localhost:3000/user/register',{...userValues},{withCredentials:true})
                if(data.created){
                   swal(data.message)
                   setValues({email:"",password:"",userName:''})
                }
                setLoading(false)
             }
            
            
        } catch (error) {
            if(error){
                console.log(error.response.data.error);
                if(error.response.data.error.email){
                    generateError(error.response.data.error.email)
                }
                
            }
        }
       }
    }
    
  return (
    
<>




  <div className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${!loading ? 'hidden':''}`}>
    <RiseLoader color="#63ecd0" className='my-auto mx-auto'/>
</div>

  <div  className={`flex items-center justify-center px-6 py-8 mx-auto ${loading ? 'blur-md':''} md:h-screen lg:py-0`}>

      <div className={width <= 1200 ? "hidden" : " flex w-3/6 "}>
        <img src="/pngsignup.png" className='loginImg' alt="" />
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register Your Account
              </h1>
              <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" onChange={()=>{setDoc(!isDoc)}} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am a Doctor</label>
</div>
              <form className="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
                  <div>
                      <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="text" name="userName" value={userValues.userName} id="userName" onChange={(e) => setValues({ ...userValues, [e.target.name]: e.target.value })}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name"/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" value={userValues.email} onChange={(e) => setValues({ ...userValues, [e.target.name]: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com"/>
                  </div>
             

                        {isDoc ? <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Licence no</label>
                      <input type="text" name="licence" id="licence" value={userValues.licence} onChange={(e) => setValues({ ...userValues, [e.target.name]: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Licence no"/>
                  </div> :''}
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" value={userValues.password} onChange={(e) => setValues({ ...userValues, [e.target.name]: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  
                  <button type="submit" className="w-full submit-btn text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-sky-700 dark:focus:ring-primary-800">Register</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to={'/login'}>Login</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>

</>
  )
}

export default Register