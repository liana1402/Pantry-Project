import NavBar from "./Navbar"
import BodyList from "./BodyList"
import React, {useState} from "react"

function App() {
  const [selected, setSelected] = useState("fruit");

  const handleNavSelection = (id) => {
    setSelected(id);
  }
  
  return (
    <>
      <NavBar onNavSelection={handleNavSelection}/>
      <BodyList selection={selected}/>
    </>
  )
}

export default App
