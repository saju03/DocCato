/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Tables from "../components/Usertable/UserTable";
import Axios from "../../axios";
function AdminDashbord() {
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate()
    const [dataUpdate,setUpdate]=useState('')
    const verifyAdmin = async () => {
        const jwt = cookies;
        if (jwt.admin_jwt) {
          try {
            const { data } = await Axios.get("admin", {
              withCredentials: true,
            });
            if (!data.status) {
               removeCookie("admin_jwt");
              navigate("/admin/login");
            }
          } catch (error) {
            console.log(error);
          }
        }else{
          navigate('/admin/login')
        }
      };


      useEffect(()=>{
        verifyAdmin()
      },[])




  return (
    <div>
    <Tables/>
    </div>

  )
}

export default AdminDashbord