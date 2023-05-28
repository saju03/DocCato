import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import AddSpecilityModal from '../../modal/AddSpecilityModal';
import Axios from '../../../../axios';
import { Button } from 'flowbite-react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


function SpecilizationTable() {
  const [specializations, setSpecializations] = useState([])
  const getSpecialitions = async () => {
    try {
      const { data } = await Axios.get('admin/get-all-specializations', { withCredentials: true })
      console.log(data);
      setSpecializations(data)
    } catch (error) {
      console.log(error);
    }
  }


  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();


  const verifyAdmin = async () => {
    const jwt = cookies;
    if (!jwt.admin_jwt) {
  navigate('/admin/login')
    } 
  };




  useEffect(() => {
    verifyAdmin()
    getSpecialitions()
  }, [])
  return (
    <div className="mt-12  flex flex-col gap-12  mx-4 mb-96">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <div className='flex justify-between '>
            <div>
              <Typography variant="h6" color="white">
                Specialities
              </Typography>
            </div>

            <div>
              <AddSpecilityModal />
            </div>


          </div>


        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Specialization Name", "Action"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody  >
              {specializations.map(
                (e, key) => {
                  const className = `py-3 px-5 ${key === e._id
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={e._id}>

                      <td className={className} >
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {e.specialization}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Button className="text-xl font-semibold text-blue-gray-600">
                          Delete
                        </Button>

                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

    </div>
  )
}

export default SpecilizationTable