import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import moon from '../imgs/icon-moon.svg'
import sun from '../imgs/icon-sun.svg'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(GlobalContext)
  const btnStyle = {
    backgroundImage: theme === "dark" ? `url(${sun})` : `url(${moon})`,
    color: theme === "dark" ? '#fff' : '#697C9A'
  }

  function handleTheme() {
    setTheme((prevState) => prevState === "dark" ? "light" : "dark")
  }

  return (
    <button
      className='header__changebtn'
      onClick={handleTheme}
      style={btnStyle}>
      {theme === "dark" ? "LIGHT" : "DARK"}
    </button>
  )
}

export default ThemeToggle