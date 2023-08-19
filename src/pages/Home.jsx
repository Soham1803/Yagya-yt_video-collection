import {useState} from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Header"
import CategoryBar from "../components/CategoryBar";
//import Tag from "../components/Tag"

import '../styles.css';
import '../components/Sidebar.css'

const Home = () => {

  const [expand, setExpand] = useState(false);


  return (
    <div> 
        <Navbar expand={expand} setExpand={setExpand} />
        <Sidebar expand={expand} setExpand={setExpand} />
        <CategoryBar/>
        {/* <Tag /> */}
    </div>
  )
}

export default Home