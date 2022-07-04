import {Navigate} from "react-router";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import React from "react";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const routes = ({authStatus, userType}) => [
    {
        path: "/admin",
        element: authStatus && userType === "ADMIN" ? <DashboardLayout userType={userType}/> :
            <Navigate to="/login"/>,
        children: [
            {path: "", element: <Navigate to="/admin/dashboard"/>},
            {path: "dashboard", element: <Dashboard/>},
            {path: "cashier/management", element: <Dashboard/>},
            {path: "cashier/management/new", element: <Dashboard/>},
            {path: "cashier/management/:id/edit", element: <Dashboard/>},
            {path: "customer/management", element: <Dashboard/>},
            {path: "customer/management/new", element: <Dashboard/>},
            {path: "customer/management/:id/edit", element: <Dashboard/>},
            {path: "products/management", element: <Dashboard/>},  //need to pass user type for customer
            {path: "products/management/new", element: <Dashboard/>},
            {path: "products/management/:id/edit", element: <Dashboard/>},
            {path: "reports", element: <Dashboard/>},
            {path: "prediction/reports", element: <Dashboard/>},
        ],
    },
    {
        path: "/cashier",
        element: authStatus && userType === "CASHIER" ? <DashboardLayout userType={userType}/> :
            <Navigate to="/login"/>,
        children: [
            {path: "", element: <Navigate to="/cashier/dashboard"/>},
            {path: "dashboard", element: <Dashboard/>},
            {path: "customer/management", element: <Dashboard/>},
            {path: "customer/management/new", element: <Dashboard/>},
            {path: "customer/management/:id/edit", element: <Dashboard/>},
            {path: "order", element: <Dashboard/>},
            {path: "order/new", element: <Dashboard/>},
            {path: "order/:id/edit", element: <Dashboard/>},
            {path: "products/management", element: <Dashboard/>},  //need to pass user type for customer
        ],
    },
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {path: "login", element: <Login/>},
            {path: "404", element: <NotFound/>},
            {path: "/", element: <Navigate to="/login"/>},
            {path: "*", element: <Navigate to="/404"/>},
        ],
    },
];

export default routes;
