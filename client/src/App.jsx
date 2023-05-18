import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Register from "./userPages/Register"
import Login from "./userPages/Login"
import Dashboard from "./userPages/Dashboard"
import DoctorDashbord from "./doctorPages/DoctorDashbord"
import Navbar  from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  
  const AppLayout = ()=>{
    return (
   <>
   <Navbar />
   <Outlet />
   <Footer/>
   </>

  )

  }

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout />,
      children:[
        {
          path:'/',
          element:<Dashboard/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
      ]
    }
  ])

  return <RouterProvider router={appRouter} />;
}

export default App

// <BrowserRouter>
// <Routes>
  
//   <Route  path="/register" element={ <Register /> }/>
//   <Route  path="/login" element={ <Login /> } />
//   <Route  path="/" element={ <Dashboard /> } />
//   <Route  path="/doctor" element={<DoctorDashbord />} />
 
// </Routes>
// </BrowserRouter>