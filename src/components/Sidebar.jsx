// import React from 'react'
import { useState } from 'react';
import '../styles.css';
import './Sidebar.css'


const Sidebar = () => {

 const [expand, setExpand] = useState(false);
  return (
    <>
    <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img src="logos/site_logo.png" alt="logo_img" />
        </span>
        <span className="logo_name">Yagya videos</span>
        <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
        <i className="bx bx-x" id="sidebar-close"></i>
      </div>
    </nav>  

    <div className={expand ? "sidebar locked" : "contract"}>
      <div className={expand ? "menu_container": "menu_container contract"}>
        <div className="menu_items">
          <ul className="menu_item">
            <div className="menu_title flex">
                <img className='icon' src="icons/home_vector.svg" alt="" />
              <span className="title">Home</span>
              <span className="line"></span>
            </div>
          </ul>
          <ul className="menu_item">
            <div className="menu_title flex">
                <img className='icon' src="icons/likes_vector.svg" alt="" />
              <span className="title">Likes</span>
              <span className="line"></span>
            </div>
          </ul>
          <ul className="menu_item">
            <div className="menu_title flex">
                <img className = "icon" src="icons/history_vector.svg" alt="" />
              <span className="title">History</span>
              <span className="line"></span>
            </div>
            
          </ul>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Sidebar