import React, { useContext } from 'react'
import './SearchResult.css'
import SearchResultHeader from './SearchResultHeader'
import UserStats from './UserStats'
import UserContact from './UserContact'

import { GlobalContext } from '../GlobalContext'

const SearchResult = ({ data }) => {
  const { theme } = useContext(GlobalContext)

  return (
    <main>
      <section className='searchresult__container' style={{ backgroundColor: theme === "dark" ? "#1E2A47" : "#FEFEFE" }}>
        <SearchResultHeader theme={theme} data={data} />
        <UserStats theme={theme} data={data} />
        <UserContact theme={theme} data={data} />
      </section>
    </main>
  )
}

export default SearchResult