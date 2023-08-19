// Navbar.js (Component)
//import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './_Header.scss'; // Uncomment this line to import the SCSS file
import PropTypes from 'prop-types';


const Navbar = ({expand, setExpand}) => {
  return (
    <div className="border border-dark header">
      <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img onClick={() => {setExpand(!expand)}}  className="baba_logo" src="logos/site_logo.png" alt="logo_img" />
        </span>
        <span className="logo_name">Yagya videos</span>
        <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
        <i className="bx bx-x" id="sidebar-close"></i>
      </div>
    </nav>  
      <div className="search-container">
        <form>
          <input type="text" placeholder="Search" className="search-input" />
          <button type="submit" className="search-button">
            <AiOutlineSearch size={22} />
          </button>
        </form>
      </div>

      <div className="Header_icons">
        {/* Add your icons or image here */}
        {/* <MdNotifications size={28} />
        <MdApps size={28} /> */}
        <img
          src="src\assets\logos\user.png"
          alt="avatar"
          className="user-avatar"
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {  // Component prop validation.
  expand: PropTypes.bool,
  setExpand: PropTypes.func,
};

export default Navbar;
