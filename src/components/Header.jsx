// Navbar.js (Component)
//import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './_Header.scss'; // Uncomment this line to import the SCSS file

const Navbar = () => {
  return (
    <div className="border border-dark header">
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

export default Navbar;
