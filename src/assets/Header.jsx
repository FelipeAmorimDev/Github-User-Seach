import React from 'react'
import './Header.css'
import { GlobalContext } from './GlobalContext'
import moon from './imgs/icon-moon.svg'
import sun from './imgs/icon-sun.svg'

const Header = () => {
  const { theme, setTheme } = React.useContext(GlobalContext)

  function handleTheme() {
    setTheme((prevState) => prevState === "dark" ? "light" : "dark")
  }

  return (
    <header className='header__container'>
      <div className="header__top">
        <a
          href="#"
          className='header__logo'
          style={{ color: theme === "dark" ? "#fff" : "#222731" }}
        >
          devfinder
        </a>
        <button
          className='header__changebtn'
          onClick={handleTheme}
          style={{
            backgroundImage:
              theme === "dark"
                ? `url(${sun})`
                : `url(${moon})`,
            color:
              theme === "dark"
                ? '#fff'
                : '#697C9A'
          }}>
          {theme === "dark" ? "LIGHT" : "DARK"}
        </button>
      </div>
      <form className="header__form">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Search GitHub username…"
          style={{
            backgroundColor: theme === "dark" ? "#1E2A47" : "#FEFEFE",
            color: theme === "dark" ? "#fff" : "#4B6A9B",
            placeholder: "red"
          }}
        />
        <button className="header__searchbtn">Search</button>
      </form>
    </header>
  )
}

export default Header