import Header from "./assets/Header/Header"
import React, { useEffect } from "react"
import { GlobalContext } from "./assets/GlobalContext"
import userLogo from './assets/imgs/user-img.png'
import SearchResult from "./assets/SearchResult/SearchResult"

function App() {
  const { theme } = React.useContext(GlobalContext)

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#141D2F" : "#F6F8FF"
  }, [theme])

  return (
    <>
      <Header />
      <SearchResult />
    </>
  )
}

export default App
