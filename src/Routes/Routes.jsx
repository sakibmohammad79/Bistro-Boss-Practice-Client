import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../pages/Dashboard/MyCart/Mycart";
import Payment from "../pages/Dashboard/Payment/Payment";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "menu",
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
        },
        {
          path: 'mycart',
          element: <PrivateRoute><Mycart></Mycart></PrivateRoute>
        },
        {
          path: 'payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        },
        //admin route
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'additem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);