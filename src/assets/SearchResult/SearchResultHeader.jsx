import React from 'react'
import userLogo from '../imgs/user-img.png'

const SearchResultHeader = ({ theme, data }) => {
  return (
    <>
      <img src={data.avatar_url} alt="" className='searchresult__userlogo' />
      <header className='searchresult__top'>
        <div>
          <h1
            className='searchresult__nickname'
            style={{ color: theme === "dark" ? "#fff" : "#2B3442" }}
          >{data.name}</h1>
          <span className='searchresult__id'>@{data.login}</span>
        </div>
        <span
          className='searchresult__joindate'
          style={{ color: theme === "dark" ? "#fff" : "#697C9A" }}>
          Joined 25 Jan 2011
        </span>
      </header>
      <p
        className='searchresult__description'
        style={{ color: theme === "dark" ? "#fff" : "#4B6A9B" }}
      >{data.bio}</p>
    </>
  )
}

export default SearchResultHeader