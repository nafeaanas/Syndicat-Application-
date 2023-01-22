import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    HiMenuAlt2,
    HiMenuAlt3,
    MdOutlineDashboard,
    BiMessageSquare,
    FiUsers,
    AiOutlineSetting,
    IoMdLogOut,
    BsBuilding,
    AiOutlineHome,
    MdPayment,
    AiOutlineFileText
} from "../../assets/icons";

function Sidebar() {

    const menus = [
        {
            name: "Dashboard",
            Link: "/dashboard",
            icon: MdOutlineDashboard,
            margin: true,
        },
        { name: "Clients", Link: "/dashboard/client", icon: FiUsers, margin: true },
        {
            name: "Appartements",
            Link: "/dashboard/apparetement",
            icon: AiOutlineHome,
        },
        {
            name: "Paiements",
            Link: "/dashboard/payment",
            icon: MdPayment,
            margin: true,
        },
        { name: "Se déconnecter", Link: "/", icon: IoMdLogOut },
    ];

    return (
        <div className="bg-gray-800 h-screen w-56 duration-500 text-gray-100 px-3">
            <div className="pt-1 flex flex-col gap-4 relative">
                <div className="flex justify-start swap swap-rotate">
                    <p className="btn btn-ghost normal-case text-xl">Dashboard</p>
                </div>
                <hr className="p-0" />
                {menus.map((menu, i) => (
                    <Link
                        to={menu?.Link}
                        key={i}
                        className={`${menu?.margin && "mt-5"} group flex items-center text-sm gap-3 font-medium p-2 hover:bg-yellow-500 rounded-md`}
                    >
                        <div>{React.createElement(menu?.icon, { size: "24" })}</div>
                        <h2
                            className={`whitespace-pre duration-500`}
                        >
                            {menu?.name}
                        </h2>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default Sidebar