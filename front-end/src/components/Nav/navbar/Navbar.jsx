/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';





function UserNavbar() {

const userDetails = useSelector(store => store.user); 
const navigate = useNavigate();
const [cookies, setCookie , removeCookie] = useCookies();
const[userLoggedIn,setUserLogged] = useState(false)
const[isDoc,setDoc] = useState(false)


useEffect(()=>{
  if(location.pathname.includes('/doctor')){
    setDoc(true)
  }else{
    setDoc(false)
  }

},[])


useEffect(()=>{
  if(cookies.user_jwt){
    setUserLogged(true)  
}
},[])


  const handleLoginBtn = (e)=>{
    e.preventDefault()
    navigate('/login')
    }

    const handleLogOutBtn = ()=>{
      removeCookie('user_jwt')
      setUserLogged(false)
    }

  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
  
    <span className=" xl:ml-32 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
     <span className='text-blue-600'>+</span> DocCato
    </span>
  </Navbar.Brand>
  
  {userLoggedIn ?
  
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
         {userDetails?.name}
        </span>
        <span className="block truncate text-sm font-medium">
        {userDetails?.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
      <Link to={'/profile'} className='dark:text-gray-400'>Profile</Link>  
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />

  </div>
  :
  <div>
    <Navbar.Toggle />
  </div> }





  <Navbar.Collapse>
    <Link
    to={'/'}
    className='dark:text-gray-400'
    >
      Home
    </Link>
    <Navbar.Link >
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
   {!userLoggedIn? <button onClick={()=>navigate('/login')} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
     Login
  </span>
</button>:''}
  </Navbar.Collapse>
</Navbar>  )
}

export default UserNavbar
