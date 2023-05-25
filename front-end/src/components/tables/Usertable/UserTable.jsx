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
import swal from "sweetalert";
import { useEffect, useState } from "react";

export function Tables() {
  const [userDatas, setUserData] = useState([])
  
  const [userD, setUserD] = useState(true)
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/admin/get-all-users", {
        withCredentials: true,

      });

      setUserData(data.data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllUsers()

  }, [userD])
  
  const HandleAction = async (e) => {
    setUserD(!userD)


    try {
      const email = e.target.value
      const { data } = await axios.post("http://localhost:3000/admin/block-user", { email }, {
        withCredentials: true,
      });
      if (data.status) {
        swal(data.message)
       
      }
      getAllUsers()
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12  mx-4 mb-64 ">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Users Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 h-96">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["user", "uuid", "access", 'Verified', "action"].map((el) => (
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
              {userDatas.map(
                ({ verified, userName, email, UUID, access, created }, key) => {
                  const className = `py-3 px-5 ${key === access
                      ? ""
                      : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={UUID}>

                      <td className={className} >
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {userName}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {UUID}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {created}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={access ? "green" : "blue-gray"}
                          value={access ? "allowed" : "denied"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {verified ? "true" : 'false'}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Button
                          className="text-xs font-semibold text-white" value={email} onClick={HandleAction}>

                          {access?'block':'unblodk'}
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
  );


}
Tables.propTypes = {
  userDatas: PropTypes.arrayOf(any)
}
export default Tables;

