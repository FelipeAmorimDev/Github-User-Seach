import React from 'react'

const SearchResultHeader = ({ theme, data }) => {
  const titleStyle = { color: theme === "dark" ? "#fff" : "#2B3442" }
  const joinDateStyle = { color: theme === "dark" ? "#fff" : "#697C9A" }
  const bioStyle = { color: theme === "dark" ? "#fff" : "#4B6A9B" }

  return (
    <>
      <img src={data.avatar_url} alt="Avatar Usuario" className='searchresult__userlogo' />
      <header className='searchresult__top'>
        <div>
          <h1 className='searchresult__nickname' style={titleStyle}>{data.name}</h1>
          <span className='searchresult__id'>@{data.login}</span>
        </div>
        <span className='searchresult__joindate' style={joinDateStyle}>Joined 25 Jan 2011</span>
      </header>
      <p className='searchresult__description' style={bioStyle}>{data.bio ? data.bio : "This profile has no bio"}</p>
    </>
  )
}

export default SearchResultHeader