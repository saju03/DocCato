import { Button, Navbar } from "flowbite-react"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom"

function AdminNav() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie , removeCookie] = useCookies();
  const navigate = useNavigate()
  const [adminLoggedIn,setLoggedIn] = useState('Login')


  const handleLogout = (e)=>{
    e.preventDefault()
    removeCookie('admin_jwt')
    navigate('/admin/login')
    setLoggedIn('Login')
  }

  useEffect(()=>{
    if(cookies.admin_jwt){
      setLoggedIn('Logout')
    }
  },[])

  return (
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand >

    <span className="self-center whitespace-nowrap text-sm font-semibold dark:text-white">
      DOCATO ADMIN
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button onClick={handleLogout}>
    {adminLoggedIn}
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Link
      to={"/admin"}
      className="dark:text-white"
    >
      Users
    </Link>
    <Link to={"/admin/doctors"}  className="dark:text-white">
      Doctors
    </Link>
    <Link to={"/admin/applications"}  className="dark:text-white">
      Applications
    </Link>
    <Link to={"/admin/speciality"}  className="dark:text-white">
      Speciality
    </Link>

  </Navbar.Collapse>






</Navbar>

  )
}

export default AdminNav