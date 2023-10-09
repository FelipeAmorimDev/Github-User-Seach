import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header__container'>
      <div className="header__top">
        <a href="#" className='header__logo'>devfinder</a>
        <button className='header__changebtn'>LIGHT</button>
      </div>
      <form className="header__form">
        <input type="text" name="username" id="username" placeholder="Search GitHub username…"/>
        <button className="header__searchbtn">Search</button>
      </form>
    </header>
  )
}

export default Header