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

export default function AddSpecilityModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [specialization, setSpeciality] = useState('')


  const handleSubmit = async(e) => {
    e.preventDefault()
    if (specialization.length) {

      try {
        const {data} = await Axios.post('admin/add-speciality',{specialization},{withCredentials:true})

        swal(data?.message)
          } catch (error) {

     swal(error.response.data.message)
      }

    }
  }

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Add NEW</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-16 place-items-center"
          >
            <Typography variant="h3" color="white">
              Add NEW
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Specility" size="lg" required={true} onChange={(e) => {
              setSpeciality(e.target.value)
            }} />

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
              Add
            </Button>

          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}