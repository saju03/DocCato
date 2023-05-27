import { Input } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import Axios from "../../../axios"



function Searchbar() {
  const [doctors, setDoctors] = useState([])
  const [result, setResult] = useState([])
  const getDoctors = async () => {
    try {
      const { data } = await Axios.get('user/getAlldoctor', { withCredentials: true })
      setDoctors(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [searctText,setSearch]=useState()

  useEffect(() => {
    getDoctors()
  }, [])

  const search = () => {
    const Result = doctors.filter((el) => {
      return (el?.doctorName?.toLowerCase().includes(searctText.toLowerCase())||el?.speciality?.toLowerCase().includes(searctText.toLowerCase()))
      
    })
    setResult(Result)
  }
  return (
    <div className='2xl:mx-96 xl:mx-64 2xl:w-96 xl:w-96 lg:w-72 md:w-64 sm:w-56 sm:mx-24 my-3'>

      <Input color="teal" label="Search" className="dark:text-white"  onChange={(e)=>{
        setSearch(e.target.value)
        search()
      }} />

      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

        { result.map((e) => {
        return  (
          searctText ?
           <div key={e.UUID}>
        <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">

                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                 {e.doctorName}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
    </div>:'')
        
        })}

      </ul>


    </div>
  )
}

export default Searchbar