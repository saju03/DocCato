/* eslint-disable react/prop-types */
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
import Axios from "../../../axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
 

export default function UpdateProfile(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [image,setImgae] = useState('image-1684926903928.jpg')
    const [imgUrl,setUrl]=useState('')
    const navigate = useNavigate()



  const[updateDetails,setDetails] = useState({
    name:props?.name,
    phone:props?.phone||''
  })

  const formData = new FormData();
   formData.append('name',updateDetails.name)
    formData.append('phone',updateDetails.phone)
    formData.append('image',image)

  const handleSubmit = async(e)=>{
    e.preventDefault()
if(image){
    try {
        const {data} = await Axios.post('user/update-profile',formData,{withCredentials:true})
        console.log(data);
        if(data.status){
          swal(data.message)
          navigate('/')
        }
    } catch (error) {
        console.log(error);
    }
  }else{
    swal('upload an image')
  }

}
  const handleUpload = (e)=>{
   setImgae(e.target.files[0]);
   setUrl(URL.createObjectURL(e.target.files[0]))

  }


  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Update</Button>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[32rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-16 place-items-center"
          >
            <Typography variant="h4" color="white">
            Update  Profile
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
     
          <div className="flex items-center justify-center w-32 mx-auto ">
            <img src={imgUrl} alt="" className="rounded-full"/>
    <label htmlFor="dropzone-file" className="flex  justify-center rounded-full w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"> 
        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
            <img src={`http://localhost:3000/${props.profileImage}`} className=" rounded-full" alt="" />
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleUpload} required/>
    </label> 
</div> 
<label htmlFor="dropzone-file" className="mx-auto">Upload Profile photo</label>

            <Input variant="static" value={updateDetails.name} placeholder={props.name} name="name" label="Name" autoComplete="off" required onChange={(e)=>setDetails({...updateDetails,[e.target.name]:e.target.value})} />
            <Input  variant="static" value={updateDetails?.phone}  label="Phone" name="phone" autoComplete="off"  onChange={(e)=> {
                 if(!isNaN(parseInt(e.target.value))){
                setDetails({...updateDetails,[e.target.name]:e.target.value})} 
                }   
  
                }/>
           
           </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
              Update
            </Button>
            
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}