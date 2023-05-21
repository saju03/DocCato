import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import AdminNav from './components/adminNav/AdminNav'
import Dashboard from './userPages/Dashboard'
import Login from './userPages/Login'
import Register from './userPages/Register'
import DoctorDashbord from './doctorPages/DoctorDashbord'
import Onboarding from './doctorPages/onbordpage/Onboarding'
import AdminDashbord from './adminPages/AdminDashbord'

import AdminLogin from './adminPages/AdminLogin'


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

  const DoctorLayout = ()=>{
    return(
        <>
   <Navbar />
   <Outlet />
   <Footer/>
   </>
    )
  }

  const AdminLayout = ()=>{
    return(
        <>
        <AdminNav />
        <Outlet/>
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
    },
    {
        path:'/doctor',
        element:<DoctorLayout/>,
        children:[
            {
                path:'/doctor',
                element:<DoctorDashbord/>
            },
            {
                path:'/doctor/login',
                element:<Login/>
            },
            {
                path:'/doctor/onbording',
                element:<Onboarding/>
            },
        ]
    },
    {
        path:'/admin',
        element:<AdminLayout/>,
        children:[
            {
                path:"/admin",
                element:<AdminDashbord />
            },
            {
                path:'/admin/login',
                element:<AdminLogin/>
            },
            {
              path:'/admin/doctors',
              element:''
            }
        ]
    }
  ])

  return <RouterProvider router={appRouter} />;
}

export default App
