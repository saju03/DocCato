import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import UserNavbar from './components/Nav/navbar/Navbar'
import Footer from './components/footer/Footer'
import AdminNav from './components/Nav/adminNav/AdminNav'
import Dashboard from './userPages/Dashboard'
import Login from './userPages/Login'
import Register from './userPages/Register'
import DoctorDashbord from './doctorPages/DoctorDashbord'
import Onboarding from './doctorPages/onbordpage/Onboarding'
import AdminDashbord from './adminPages/AdminDashbord'
import { Provider } from 'react-redux'
import store from './utils/Store'
import AdminLogin from './adminPages/AdminLogin'
import DoctorTables from './components/tables/doctorTable/DoctorTable'
import ApplicationTable from './components/tables/applicationTables/ApplicationTable'
import Profile from './components/profile/Profile'
import DocNavbars from './components/Nav/docNav/DocNavbar'
import ResetPasswordPage from './components/forgotpage/ResetPasswordPage'
import SpecilizationTable from './components/tables/speciliationTable/SpecilizationTable'


function App() { 
  
  const AppLayout = ()=>{
    return (
   <Provider store={store}>
   <UserNavbar />
   <Outlet />
   <Footer/>
   </Provider>

  )

  }

  const DoctorLayout = ()=>{
    return(
        <>
         <Provider store={store}>
   <DocNavbars />
   <Outlet />
   <Footer/>
   </Provider>
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
        {
          path:'/profile',
          element:<Profile/>
        },
        {
          path:'/user/:id/passwordRecovery',
          element:<ResetPasswordPage/>
        }
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
              element:<DoctorTables/>
            },
            {
              path:'/admin/applications',
              element:<ApplicationTable/>
            },
            {
              path:'/admin/speciality',
             element:<SpecilizationTable/>
            }
        ]
    }
  ])

  return <RouterProvider router={appRouter} />;
}

export default App
