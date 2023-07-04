import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Channel from "./pages/Channel"

function App() {
  

  return (
    <>
      <div>
        
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/channel" element={<Channel />}></Route>
        </Routes>
      </div>
      
    </>
  )
}

export default App
