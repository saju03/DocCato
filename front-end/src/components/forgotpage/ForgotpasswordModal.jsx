import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Axios from "../../../axios";
import swal from "sweetalert";
import { RiseLoader } from "react-spinners";
 
export default function ForgotPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const[email,setEmail] = useState('')
  const [loading,setLoading] = useState(false)
  const handleSubmit =async (e)=>{
    e.preventDefault()
    setLoading(true)
    const {data} = await Axios.post('user/forgot-password-recovery',{email},{withCredentials:true})
    setLoading(false)
    if(data.status){
      swal(data.message)
    }
  }

  return (
    <React.Fragment>
        <div className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${!loading ? 'hidden':''}`}>
    <RiseLoader color="#63ecd0" className='my-auto mx-auto'/>
</div>

      <Link onClick={handleOpen} className={`text-sm font-medium text-primary-600 hover:underline dark:text-gray-100 ${loading ? 'blur-md':''}`}>forgot password ?</Link>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[36rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-20 place-items-center"
          >
            <Typography variant="h4" color="white">
           Enter your email
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" type="email" size="md" onChange={(e)=>setEmail(e.target.value)} />
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
             Sent Email
            </Button>
         
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}