import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrerPage";
import DasboardLayout from "../Layout/DasboardLayout";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails";
import AllProduct from "../Pages/AllProduct";
import AddProducts from "../Pages/AddProducts";
import Edit from "../Pages/Edit";
import EditProfile from "../Pages/EditProfile";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:5000/events")
        },
        {
            path:'/product/:id',
            element:<ProductDetails></ProductDetails>,
            loader:({params})=>fetch(`http://localhost:5000/events/${params.id}`)
        },
       
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
    
      ]
    },
    {
        path:"dasboard",
        element:<DasboardLayout></DasboardLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"profile",
                element:<PrivateRoute><Profile></Profile> </PrivateRoute>
            },
           
            // {
            //     path:"profile/profile-edit/:id",
            //     element:<PrivateRoute><EditProfile></EditProfile></PrivateRoute>,
            //     loader:({params})=>fetch(`http://localhost:5000/users/get/${params.id}`)
            // },

            {
                path: "profile/profile-edit/:id",
                element: <PrivateRoute><EditProfile /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/get/${params.id}`)
              },


            {
                path:"all-products",
                element:<PrivateRoute>
                    <AllProduct></AllProduct>
                </PrivateRoute>
            },
            {
                path:"dashboard",
                element:<PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            },
            {
                path:"add-products",
                element:<PrivateRoute>
                    <AddProducts></AddProducts>
                </PrivateRoute>
            },
            {
                path:"all-products/edit/:id",
                element:<PrivateRoute>
                    <Edit></Edit>
                </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/events/${params.id}`)
            },
        ]
    }
  ]);