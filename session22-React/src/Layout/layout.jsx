import { Outlet } from "react-router-dom"
import { Footer } from "../shared/Footer"
import { Navbar } from "../shared/Navbar"


export const Layout = ()=>{
    return (
        <>
        <Navbar/>
          <Outlet/>
        <Footer/>
        </>
    )
}