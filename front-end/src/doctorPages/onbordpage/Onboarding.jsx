/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import swal from'sweetalert'
import Axios from "../../../axios";
import { Select, Option } from "@material-tailwind/react";
function Onboarding() {
  const [cookies, setCookies, removeCookie] = useCookies();
  const [application, setApplicaton] = useState({
    fullName: '',
    speciality: '',
    medicalCouncil: '',
    certificateNo: '',
    registrationNo: '',
    phone: '',
    exp: ''
  })
  const navigate= useNavigate()
  const [specializations,setSpecializations] = useState([])
  const handleSubmit = async (e)=>{

    console.log(application);

    e.preventDefault();
    try {
       const { data } = await axios.post("http://localhost:3000/doctor/register-application",{...application}, {
          withCredentials: true,
        });
        if(data.status){
          swal(data.message)
          navigate('/')
        }else{
          swal(data.message)
        }
    } catch (error) {
      console.log(error);
    }
  }

  const getSpecialitions = async ()=>{
    try {
      const {data} = await Axios.get('admin/get-all-specializations',{withCredentials:true})

      setSpecializations(data)
    } catch (error) {
      console.log(error);
    }
  }
  const verifyDoctor = async () => {
    const jwt = cookies;
    if (jwt.doctor_jwt) {
      try {
        const { data } = await axios.get("http://localhost:3000/doctor", {
          withCredentials: true,
        });
        if (data.status) {
          if(data.access){
             navigate("/doctor");
          }else{
            navigate('/doctor/onbording')
          }
         
        } else {
          removeCookie("doctor_jwt");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      navigate('/doctor/login')
    }
  };
  useEffect(()=>{
  verifyDoctor()
  getSpecialitions()
  },[])
  return (
    <div>

      <form className=" mx-14 mt-20 mb-60" onSubmit={handleSubmit}>
        <span className="text-white text-3xl mb-20">Enter Your details</span>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="fullName" id="floating_email"
           onChange={(e) => {
            setApplicaton({
              ...application,
              [e.target.name]: e.target.value,
            })
            
          }}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
        </div>
 
        <div className="w-72 h-14">
      <Select label="Select Specilizition" name="speciality">
        {specializations.map((e)=>{
          return (<Option key={e._id} onClick={(e)=>{
            setApplicaton({
              ...application,
              speciality:e.target.outerText,
            })
          }}>{e.specialization}</Option>)
        })}
       
       
      </Select>
    </div>

         
    
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="medicalCouncil" id="floating_repeat_password"
          
          onChange={(e) => {
            setApplicaton({
              ...application,
              [e.target.name]: e.target.value,
            })
            
          }}className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State Meical Council</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="certificateNo" id="floating_first_name" 
            
            onChange={(e) => {
              setApplicaton({
                ...application,
                [e.target.name]: e.target.value,
              })
              
            }}className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Certificate no</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="registrationNo" id="floating_last_name"
            
            onChange={(e) => {
              setApplicaton({
                ...application,
                [e.target.name]: e.target.value,
              })
              
            }}className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Registeration no.</label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="tel" name="phone"
            
            onChange={(e) => {
              setApplicaton({
                ...application,
                [e.target.name]: e.target.value,
              })
              
            }}id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="number" min={0} name="exp" id="floating_company"
            
            onChange={(e) => {
              setApplicaton({
                ...application,
                [e.target.name]: e.target.value,
              })
              
            }}className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">year of exp.</label>
          </div>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}

export default Onboarding