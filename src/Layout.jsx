import React from 'react'


import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer.jsx'
import Header from './Component/Header/Header.jsx'
function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout
