/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Axios from "../../axios";

function AdminLogin() {
    const [loginDetails, setDetails] = useState({
        email: "",
        password: "",
      });
      const [cookies, setCookies, removeCookie] = useCookies();
      const navigate = useNavigate()

      const verifyAdmin = async () => {
        const jwt = cookies;
        if (jwt.admin_jwt) {
          try {
            const { data } = await Axios.get("admin", {
              withCredentials: true,
            });
            if (data.status) {
              navigate("/admin");
            } else {
              removeCookie("admin_jwt");
              navigate("/admin/login");
            }
          } catch (error) {
            console.log(error);
          }
        }
      };
      useEffect(()=>{
        verifyAdmin()
      },[])

    const handelSubmit = async (e)=>{
        e.preventDefault() 
        try {
          const {data} =await axios.post("http://localhost:3000/admin/login",{...loginDetails},{withCredentials:true})  
            if(data.status){
                navigate('/admin')
            }
        } catch (error) {
                console.log(error);
        }
    }
    
  return (
    <div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl dark:bg-[#111827]">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form className="mt-6" onSubmit={handelSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="email"
                            onChange={(e) => {
                                setDetails({
                                  ...loginDetails,
                                  [e.target.name]: e.target.value,
                                })}}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800  dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                name="password"
                            onChange={(e) => {
                                setDetails({
                                  ...loginDetails,
                                  [e.target.name]: e.target.value,
                                })}}
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default AdminLogin