/* eslint-disable react/prop-types */
import { Button, Modal } from "flowbite-react"
import React, { useState } from "react"
import Axios from "../../../axios"


function ApplicationModal({ props }) {

    const [show, setShow] = useState(false)
    const handleShow = (e) => {
        e.preventDefault()
        setShow(!show)
    }


    const handleAccept = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.post('admin/application-update', { id: props._id, approved: true }, { withCredentials: true })
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDecline = (e) => {
        e.preventDefault();

    }
    return (
        <React.Fragment>
            <Button onClick={handleShow}>
                view
            </Button>
            <Modal
                dismissible={handleShow}
                show={show}
                onClose={handleShow}

            >
                <Modal.Header>
                    Doctor Application
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-row p-6 space-y-6 flex-wrap justify-evenly">

                        <div className="text-white flex flex-col p-2 mt-5">
                            <span className="m-3">Doctor Name : {props?.fullName}</span>
                            <span className="m-3">Speciality: {props?.speciality}</span>
                            <span className="m-3">Phone: {props?.phone}</span>
                            <span className="m-3">Experiance: {props?.exp} Years</span>
                        </div>
                        <div className="text-white flex flex-col p-2 mt-0">
                            <span className="m-3">Medical Council :  {props?.medicalCouncil}</span>
                            <span className="m-3">Registration no : {props?.registrationNo}</span>
                            <span className="m-3">Certificate : {props?.certificateNo}</span>
                            <span className="m-3">Experiance: {props?.exp} Years</span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button value={props?._id} onClick={handleAccept} >
                        Accept
                    </Button>
                    <Button
                        color="gray"
                        onClick={handleDecline}
                    >
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default ApplicationModal