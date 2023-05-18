import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import Card from '../components/cards_1/Card'
import Searchbar from '../components/searchbar/Searchbar'
import Card2 from '../components/cards_2/Card2'
import Footer from '../components/footer/Footer'
import LoginPopup from './LoginPopup'

function Dashboard() {
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