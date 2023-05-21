/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function DoctorDashbord() {
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();

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
  },[])

  return (
    <div >
      <h1>alsdfjalsdkjf</h1>
    </div>
  )
}

export default DoctorDashbord