// import React from 'react'

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Header"
import CategoryBar from "../components/CategoryBar";
//import Tag from "../components/Tag"

const Home = () => {
  return (
    <div> 
        <Navbar/>
        <Sidebar />
        <CategoryBar/>
        {/* <Tag /> */}
    </div>
  )
}

export default Home