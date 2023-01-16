import React from 'react'

import { NavLink , Link} from 'react-router-dom'
import { useState } from 'react';
import axios from "axios";
import Cookies from "universal-cookie";
const  cookies = new Cookies();

export default function home() {
   
    
    

// export default Header;
// import logo from '../../assets/undraw_Order_delivered_re_v4ab.png'; 
// import {Link} from "react-router-dom";


// function Homepage() {
    const logout = () => {
        cookies.remove("TOKEN", {
            path: "/",
        })
        // alert('goood') ;
        // alert(cookies.get("TOKEN")); // undefined
        // return <Navigate to="/" />;



    window.location.href = "/";
    }

        return (
        <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">What business are you?</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
            Main Hero Message to sell yourself!
            </h1>
            <p className="leading-normal text-2xl mb-8">
            Sub-hero message, not too long and not too short. Make it just right!
            </p>
            <button onClick={()=> logout()} className="mx-auto btncolor lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            {/* <Link  to="/logout">login</Link>   */}

            </button>
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
        </div>
        </div>
        </div>
        );
}