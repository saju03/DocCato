/* eslint-disable no-unused-vars */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
import PropTypes, { any } from 'prop-types';
import axios from "axios";
import { useEffect, useState } from "react";
import ApplicationModal from "../../modal/ApplicationModal";
import Axios from "../../../../axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function ApplicationTable() {
  const [applications, setApplications] = useState([])


  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();


  const verifyAdmin = async () => {
    const jwt = cookies;
    if (!jwt.admin_jwt) {
  navigate('/admin/login')
    } 
  };




  const getAllApplications = async () => {
    try {
      const { data } = await Axios.get("admin/get-all-application", {
        withCredentials: true,

      });
      setApplications(data.data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    verifyAdmin()
    getAllApplications()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="mt-12  flex flex-col gap-12  mx-4 mb-96">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Pending Applicaions

          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Doctor Name ", "Certificate no", "phone", 'register no', "Applied Date", 'year of exp', 'view'].map((el) => (
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
              {applications.map(
                (e, key) => {
                  const className = `py-3 px-5 ${key === e.UUID
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={e.UUID}>

                      <td className={className} >
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {e.fullName}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {e.speciality}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {e.certificateNo}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {e.medicalCouncil}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {e.phone}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {e.registrationNo}
                        </Typography>
                      </td>

                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {e.postedDate.substring(0, 10)}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {e.exp}
                        </Typography>
                      </td>
                      <td className={className}>

                        <ApplicationModal props={e} />
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
  );


}
ApplicationTable.propTypes = {
  userDatas: PropTypes.objectOf(any)
}
export default ApplicationTable;

