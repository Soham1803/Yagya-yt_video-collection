// import React from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Header"
import CategoryBar from "../components/CategoryBar";
//import Tag from "../components/Tag"

import '../styles.css';
import '../components/Sidebar.css'

const Home = () => {

  // const [expand, setExpand] = useState(false);

  // const expandSidebar = () => {
  //   if(window.innerWidth <= 450) return; 
  //   setExpand(!expand);
  // }

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