import React from "react";
import { Route, Navigate , Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function Protected() {
 
 
 if(!cookies.get("TOKEN")) {
    return <Navigate to="/" /> 
 }   
 return <Outlet /> ;
}