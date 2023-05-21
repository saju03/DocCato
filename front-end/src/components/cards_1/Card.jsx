import { Link } from "react-router-dom"


function Card() {
  return (
    // flex justify-center h-64 sm:mx-2 md:mx-[3%] lg:mx-[3%] xl:mx-[18%] bg-[#be185d] mt-10bg-[#7fbdca]
    
  <div className='flex justify-center h-52 sm:h-64 md:h-64 lg:h-80  mt-4 '> 

    <div className="rounded-xl mx-3  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 dark:text-white">
      <img className="rounded-t-lg h-32 w-40 sm:h-40 bg-[#7fbdca] sm:w-48 md:h-48 md:w-52 lg:h-48 lg:w-56 lg:px-8" src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png" alt="" />
    <div className="p-6">
      <span className="text-sm lg:text-xl font-semibold font-mono mb-2 text-neutral-800 dark:text-neutral-50">
       Instant Video <br/> Consultation <br/>
      </span>
      <span className=" text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
   
      </span>
    </div>
  </div>
    <div className="rounded-xl mx-3  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 dark:text-white">
    <Link href="">
      <img className="rounded-t-lg h-32 w-40 sm:h-40 bg-[#afcfed] sm:w-48 md:h-48 md:w-52 lg:h-48 lg:w-56 lg:px-8" src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" alt="" />
    </Link>
    <div className="p-6">
      <h4 className="mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h4>
      <h6 className="mb-2 text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h6>
    </div>
  </div>
    <div className="rounded-xl mx-3 hidden md:block  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 dark:text-white">
    <Link href="">
      <img className="rounded-t-lg bg-[#98cbd6] h-32 w-40 sm:h-40 sm:w-48 md:h-48 md:w-52 lg:h-48 lg:w-60 lg:px-8" src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" alt="" />
    </Link>
    <div className="p-6">
      <h4 className="mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h4>
      <h6 className="mb-2 text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h6>
    </div>
  </div>
    <div className="rounded-xl mx-3 hidden xl:block bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 dark:text-white">
    <Link href="">
      <img className="rounded-t-lg h-32 w-40 sm:h-40 sm:w-48 md:h-48 md:w-52 lg:h-48 bg-[#d5d8fc] lg:w-56 lg:px-8" src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png" alt="" />
    </Link>
    <div className="p-6">
      <h4 className="mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h4>
      <h6 className="mb-2 text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h6>
    </div>
  </div>
    <div className="rounded-xl mx-3 hidden lg:block bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 dark:text-white">
    <Link href="">
      <img className="rounded-t-lg h-32 w-40 sm:h-40 sm:w-48 md:h-48 bg-[#eddfaf] md:w-52 lg:h-48  lg:w-56 lg:px-8" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
    </Link>
    <div className="p-6">
      <h4 className="mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h4>
      <h6 className="mb-2 text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h6>
    </div>
  </div>
    

 </div>
  )
}

export default Card