import { Avatar, Dropdown, Navbar } from "flowbite-react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function DocNavbar() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie , removeCookie] = useCookies();
  const navigate = useNavigate()
  const handleLogout = ()=>{

    removeCookie('doctor_jwt')
    navigate('/login')
  }
  return (
    <div>
      <Navbar
  fluid
  rounded
>
  <Navbar.Brand href="https://flowbite.com/">
   
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white lg:ml-14">
   DocCato DR
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      inline
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      active
      href="/navbars"
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Bookings
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </div>

  )
}

export default DocNavbar