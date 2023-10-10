import Header from "./assets/Header/Header"
import React, { useEffect } from "react"
import { GlobalContext } from "./assets/GlobalContext"

import SearchResult from "./assets/SearchResult/SearchResult"

function App() {
  const { theme } = React.useContext(GlobalContext)
  const [data, setData] = React.useState("")
  const [search,setSearch] = React.useState("octocat")

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#141D2F" : "#F6F8FF"
  }, [theme])

  useEffect(() =>{
    fetch(`https://api.github.com/users/${search}`)
    .then((response) => response.json())
    .then((json) => setData(json))
  },[search])

  return (
    <>
      <Header setSearch={setSearch}/>
      <SearchResult data={data}/>
    </>
  )
}

export default App
