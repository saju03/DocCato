import { Button, Navbar } from "flowbite-react"
import { Link } from "react-router-dom"

function AdminNav() {
  return (
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
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
    <Navbar.Link href="/navbars"  className="dark:text-white">
      Applications
    </Navbar.Link>

  </Navbar.Collapse>






</Navbar>

  )
}

export default AdminNav