import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Dashboard/Sidebar"
import Navbar from "./Dashboard/Navbar"
import "./Layout.css"
import React from 'react'
const Layout = ({setUser}) => {
  return (
    <>
    <div style={{display:"flex", flexDirection:"column"}}>
      <div className="header"><Navbar setUser={setUser}/></div>
      <div style={{display:"flex"}}>
        <div className="sidebar"><Sidebar/></div>
        <div className="outlet"><Outlet/></div>
      </div>
    </div>



    </>
  )
}

export default Layout