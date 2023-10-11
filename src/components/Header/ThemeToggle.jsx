import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import moon from '../../assets/icon-moon.svg'
import sun from '../../assets/icon-sun.svg'

const ThemeToggle = () => {
  const { theme, handleChangeTheme } = useContext(GlobalContext)
  
  const btnStyle = {
    backgroundImage: theme === "dark" ? `url(${sun})` : `url(${moon})`,
    color: theme === "dark" ? '#fff' : '#697C9A'
  }

  return (
    <button
      className='header__changebtn'
      onClick={handleChangeTheme}
      style={btnStyle}>
      {theme === "dark" ? "LIGHT" : "DARK"}
    </button>
  )
}

export default ThemeToggle