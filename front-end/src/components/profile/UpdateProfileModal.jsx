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
import { useSelector } from "react-redux";
import Axios from "../../../axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
 
export default function UpdateProfile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const userDetails = useSelector(store => store.user); 
    const [image,setImgae] = useState()
    const [imgUrl,setUrl]=useState()
    const navigate = useNavigate()
  const[updateDetails,setDetails] = useState({
    name:userDetails.name,
    phone:userDetails.phone
  })
  console.log(updateDetails);
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
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
        </div>
        <input id="dropzone-file" type="file" value={userDetails.profileImage} className="hidden" onChange={handleUpload} required/>
    </label> 
</div> 
<label htmlFor="dropzone-file" className="mx-auto">Upload Profile photo</label>

            <Input variant="static" value={updateDetails.name} placeholder={userDetails.name} name="name" label="Name" autoComplete="off" required onChange={(e)=>setDetails({...updateDetails,[e.target.name]:e.target.value})} />
            <Input  variant="static" value={updateDetails.phone}  label="Phone" name="phone" autoComplete="off"  onChange={(e)=> {
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