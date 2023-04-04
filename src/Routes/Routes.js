import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Apoientment from "../Pages/Apoientment/Apoientment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointments from "../Pages/Dashboard/MyAppointments/MyAppointments";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import LogIn from "../Pages/SignInMethod/LogIn/LogIn";
import LogOut from "../Pages/SignInMethod/LogOut/LogOut";
import RegisterNow from "../Pages/SignInMethod/RegisterNow/RegisterNow";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/Dashboard/Users/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Apoientment></Apoientment>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/logout',
                element: <LogOut></LogOut>
            },
            {
                path: '/register',
                element: <RegisterNow></RegisterNow>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><DashboardLayouts></DashboardLayouts></PrivateRoutes>,
                children: [
                    {
                        path: '/dashboard',
                        element: <MyAppointments></MyAppointments>
                    },
                    {
                        path: '/dashboard/users',
                        element: <AllUsers></AllUsers>
                    },
                ]
            },

        ]
    },
    {

    }
])