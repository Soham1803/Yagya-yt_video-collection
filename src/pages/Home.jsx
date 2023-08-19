import {useState} from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Header/Header"
import CategoryBar from "../components/Category/CategoryBar";
//import Tag from "../components/Tag"

import '../styles.css';
import '../components/Sidebar/Sidebar.css'

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