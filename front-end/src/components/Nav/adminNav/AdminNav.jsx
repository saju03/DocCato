import { Button, Navbar } from "flowbite-react"
import { Link } from "react-router-dom"

function AdminNav() {
  return (
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand >

    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      DOCATO ADMIN
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button>
     LOGOUT
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Link
      to={"/admin"}
      className="dark:text-white"
    >
      Users
    </Link>
    <Link to={"/admin/doctors"}  className="dark:text-white">
      Doctors
    </Link>
    <Link to={"/admin/applications"}  className="dark:text-white">
      Applications
    </Link>

  </Navbar.Collapse>






</Navbar>

  )
}

export default AdminNav