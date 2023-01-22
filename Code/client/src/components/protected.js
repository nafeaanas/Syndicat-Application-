import React from 'react'
import { Navigate, Outlet } from "react-router"



function ProtectedRoutes() {

const token = localStorage.getItem("token")
console.log("mlsdksmdksmdksqmlksdlslmdksqdùlms");

return token ? <Outlet/> : <Navigate to="/"/>

}

export default ProtectedRoutes