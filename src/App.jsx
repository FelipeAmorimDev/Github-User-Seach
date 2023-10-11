import Header from "./components/Header/Header"
import React, { useEffect } from "react"
import { GlobalContext } from "./components/GlobalContext"

import SearchResult from "./components/SearchResult/SearchResult"
import useFetch from "./hooks/useFetch"

function App() {
  const [search, setSearch] = React.useState("octocat")

  const { data, error } = useFetch(search)

  return (
    <>
      <Header setSearch={setSearch} error={error} />
      <SearchResult data={data} />
    </>
  )
}

export default App
