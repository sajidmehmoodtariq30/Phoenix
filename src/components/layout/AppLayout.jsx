import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../ui/Sidebar.jsx'
import Footer from '../ui/Footer.jsx'

const AppLayout = () => {
    return (
        <div className='flex w-screen h-screen overflow-x-hidden overflow-y-auto gap-4 bg-[#F5FBF7] dark:bg-[#0E1513] text-[#171D1B] dark:text-[#DEE4E0]'>
            <Sidebar />
            <div>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default AppLayout