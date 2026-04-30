import express from "express";
import { createBrowserRouter } from "react-router-dom";
import login from "../pages/Loginpage";
import SignUp from "../pages/SignUppages";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/signup",
                element: "<SignUp/>"
            },
            {
                path: "/login",
                element: "<Login/>"
            }
        ]
    }
]);