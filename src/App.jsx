import React from "react"
import Header from "./components/Header/Header"
import SearchResult from "./components/SearchResult/SearchResult"
import useFetch from "./hooks/useFetch"
import { GlobalContext } from "./components/GlobalContext"

function App() {
  const [search, setSearch] = React.useState("octocat")
  const { data, error, loading } = useFetch(search)
  const { theme } = React.useContext(GlobalContext)

  const loadingStyle = { color: theme === 'dark' ? "#fff" : "#000" }
  
  return (
    <>
      <Header setSearch={setSearch} error={error} />
      {loading && <p className="loading" style={loadingStyle}>Carregando...</p>}
      {data && !loading && <SearchResult data={data} />}
    </>
  )
}

export default App
