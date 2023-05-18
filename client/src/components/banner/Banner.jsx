import React from 'react'
import './banner.css'
function Banner() {
  //    2xl:h-80 sm:mx-4 xl:mx-32 xl:mt-10 sm:mt-10 mt-10  
  return (
    <div className='flex justify-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 px-3 overflow-hidden '>
   
    <img  className='hidden sm:block' src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png " alt="" />

    <img className='sm:hidden' src="https://www.practostatic.com/consumer-home/mweb/images/1597391270/mweb_Mothers_Day_HeroBanner.png" alt="" />
  
    </div>
  )
}

export default Banner