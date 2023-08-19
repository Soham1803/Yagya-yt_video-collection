// import React from 'react'

import '../../styles.css';
import './Sidebar.css'


const Sidebar = (expand) => {

  
  return (
    <>

    <div className={expand.expand ? "expand" : "contract"}>
      <div className={expand.expand ? "menu_container_expand": "menu_container_contract"}>
        <div className={expand.expand ? "menu_items" : "menu_items_contract"}>
          <ul className={expand.expand ? "menu_item": "menu_item_contract"}>
            <div className={expand.expand ?"menu_title flex":"menu_title_contract"}>
                <img className='icon' src="icons/home_vector.svg" alt="" />
              <span className={expand.expand ?"title":"title_contract"}>Home</span>
            </div>
          </ul>
          <ul className={expand.expand ? "menu_item": "menu_item_contract"}>
            <div className={expand.expand ?"menu_title flex":"menu_title_contract flex"}>
                <img className='icon' src="icons/likes_vector.svg" alt="" />
              <span className={expand.expand ?"title":"title_contract"}>Likes</span>
            </div>
          </ul>
          <ul className={expand.expand ? "menu_item": "menu_item_contract"}>
            <div className={expand.expand ?"menu_title flex":"menu_title_contract flex"}>
                <img className = "icon" src="icons/history_vector.svg" alt="" />
              <span className={expand.expand ?"title":"title_contract"}>History</span>
            </div>
            
          </ul>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Sidebar