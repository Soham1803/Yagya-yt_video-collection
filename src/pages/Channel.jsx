// import React from 'react'
import {useState} from 'react'

import Navbar from "../components/Header"
import Sidebar from "../components/Sidebar"
import Tag from "../components/Tag"

const Channel = () => {

  const [expand, setExpand] = useState(false);

  return (
    <div>
        <Navbar expand={expand} setExpand={setExpand} />
        <Sidebar expand={expand} setExpand={setExpand} />
        <Tag />
    </div>
  )
}

export default Channel