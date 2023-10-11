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

  React.useEffect(() => {
    const bodyColor = theme === "dark" ? "#141D2F" : "#F6F8FF"

    document.body.style.backgroundColor = bodyColor
  }, [theme])

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