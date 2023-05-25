/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner'
import Card from '../components/cards_1/Card'
import Searchbar from '../components/searchbar/Searchbar'
import Card2 from '../components/cards_2/Card2'
import Axios from '../../axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { setUserProfile } from '../utils/UserSlice'
import { useDispatch } from 'react-redux'

function Dashboard() {
  const dispatch = useDispatch()
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();

  const verifyUser = async () => {
    const jwt = cookies;
    if (jwt.user_jwt) {
      try {
        const { data } = await Axios.get("user", {
          withCredentials: true,
        });
           if (data.status) {
            dispatch(setUserProfile(data))
          navigate("/");
        } else {
          removeCookie("user_jwt");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    }

    

  };
useEffect(()=>{
verifyUser()
},[])
  return (
    <div>
<Searchbar/>
<Banner />
<Card />
<Card2 />
    </div>
    
  )
}

export default Dashboard