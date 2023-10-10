import Header from "./assets/Header/Header"
import React, { useEffect } from "react"
import { GlobalContext } from "./assets/GlobalContext"

import SearchResult from "./assets/SearchResult/SearchResult"

function App() {
  const { theme } = React.useContext(GlobalContext)
  const [data, setData] = React.useState("")
  const [search, setSearch] = React.useState("octocat")
  const [error, setError] = React.useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#141D2F" : "#F6F8FF"
  }, [theme])

  useEffect(() => {
    setError(false)
    fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((json) => {
        if (!json.message) return setData(json)

        return setError(true)
      })
  }, [search])

  return (
    <>
      <Header setSearch={setSearch} error={error} />
      <SearchResult data={data} />
    </>
  )
}

export default App
