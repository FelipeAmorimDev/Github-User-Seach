import Header from "./assets/Header"
import React, { useEffect } from "react"
import { GlobalContext } from "./assets/GlobalContext"
function App() {
  const {theme} = React.useContext(GlobalContext)
  
  useEffect( () => {
    document.body.style.backgroundColor = theme === "dark" ? "#141D2F" : "#F6F8FF"
  },[theme])

  return (
    <Header />


  )
}

export default App
