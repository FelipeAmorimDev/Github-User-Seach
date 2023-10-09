import React from 'react'
import userLogo from '../imgs/user-img.png'
import './SearchResult.css'

const SearchResult = () => {
  return (
    <main>
      <section className='searchresult__container'>
        <img src={userLogo} alt=""  className='searchresult__userlogo'/>
        <header className='searchresult__top'>
          <div>
            <h1 className='searchresult__nickname'>The Octocat</h1>
            <span className='searchresult__id'>@octocat</span>
          </div>
          <span className='searchresult__joindate'>Joined 25 Jan 2011</span>
        </header>
        <p className='searchresult__description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
      </section>
    </main>
  )
}

export default SearchResult