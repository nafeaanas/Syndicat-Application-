import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'


function Layout() {
    return (
        <div className='flex flex-row'>
            <Sidebar />
            <div className='w-full p-3'><Outlet /></div>
        </div>

    )
}

export default Layout