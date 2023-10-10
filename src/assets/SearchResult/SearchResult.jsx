import React from 'react'
import userLogo from '../imgs/user-img.png'
import './SearchResult.css'

const SearchResult = () => {
  return (
    <main>
      <section className='searchresult__container'>
        <img src={userLogo} alt="" className='searchresult__userlogo' />
        <header className='searchresult__top'>
          <div>
            <h1 className='searchresult__nickname'>The Octocat</h1>
            <span className='searchresult__id'>@octocat</span>
          </div>
          <span className='searchresult__joindate'>Joined 25 Jan 2011</span>
        </header>
        <p className='searchresult__description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
        <ul className="userstats__list">
          <li className='userstats__item'>
            <span className='userstats__state'>Repos</span>
            <span className='userstats__value'>8</span>
          </li>
          <li className='userstats__item'>
            <span className='userstats__state'>Followers</span>
            <span className='userstats__value'>3938</span>
          </li>
          <li className='userstats__item'>
            <span className='userstats__state'>Following</span>
            <span className='userstats__value'>9</span>
          </li>
        </ul>
        <ul className="usercontact__list">
          <li className="usercontact__item">
            <img src="./assets/icon-location.svg" alt="" />
            <span>San Francisco</span>
          </li>
          <li className="usercontact__item">
            <img src="./assets/icon-twitter.svg" alt="" />
            <span>Not Available</span>
          </li>
          <li className="usercontact__item">
            <img src="./assets/icon-website.svg" alt="" />
            <span>https://github.blog</span>
          </li>
          <li className="usercontact__item">
            <img src="./assets/icon-company.svg" alt="" />
            <span>@github</span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default SearchResult