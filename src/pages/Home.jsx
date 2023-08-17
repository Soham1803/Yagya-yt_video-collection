// import React from 'react'
import { useState } from "react"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Tag from "../components/Tag"

import '../styles.css';
import '../components/Sidebar.css'

const Home = () => {

  const [expand, setExpand] = useState(false);

  const expandSidebar = () => {
    if(window.innerWidth <= 450) return; 
    setExpand(!expand);
  }

  return (
    <div> 
      <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img onClick={expandSidebar} className="baba_logo" src="logos/site_logo.png" alt="logo_img" />
        </span>
        <span className="logo_name">Yagya videos</span>
        <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
        <i className="bx bx-x" id="sidebar-close"></i>
      </div>
    </nav>  

        {/* <Navbar /> */}
        <Sidebar expand={expand} />
        {/* <Tag /> */}
    </div>
  )
}

export default Home